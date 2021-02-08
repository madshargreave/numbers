import { inject, injectable } from 'inversify'
import { ReservationStore } from './reservationStore'
import {
    CreateReservationCommand,
    CancelReservationCommand,
    EndReservationCommand,
} from './reservationCommands'
import { ReservationAggregate } from '../domain/reservationAggregate'
import { ReservationTracer } from './reservationTracer'

@injectable()
export class ReservationService {
    constructor(
        @inject(ReservationStore) private store: ReservationStore,
        @inject(ReservationAggregate) private aggregate: ReservationAggregate,
        @inject(ReservationTracer) private tracer: ReservationTracer
    ) {}

    async create(command: CreateReservationCommand) {
        return this.tracer.create(command, async () => {
            const current = await this.store.getIfExists(command.data)
            const created = this.aggregate.create(current, command.data)
            return created
        })
    }

    async cancel(command: CancelReservationCommand) {
        return this.tracer.cancel(command, async () => {
            const current = await this.store.get(command)
            return current
        })
    }

    async end(command: EndReservationCommand) {
        return this.tracer.end(command, async () => {
            const current = await this.store.get(command)
            const ended = this.aggregate.end(current)
            return ended
        })
    }
}
