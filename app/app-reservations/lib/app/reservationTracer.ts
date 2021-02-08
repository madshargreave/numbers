import { inject, injectable } from 'inversify'
import { ReservationEventTypes } from '../domain/reservationEnums'
import { AnyReservation } from '../domain/reservationTypes'
import { ReservationDeps } from '../reservationDeps'
import {
    CancelReservationCommand,
    CreateReservationCommand,
    EndReservationCommand,
} from './reservationCommands'
import { ReservationListener } from './reservationListener'

@injectable()
export class ReservationTracer {
    constructor(
        @inject(ReservationDeps.LISTENER) private listener: ReservationListener
    ) {}

    async create(
        command: CreateReservationCommand,
        callback: () => Promise<AnyReservation>
    ) {
        const reservation = await callback()
        this.listener.emit(ReservationEventTypes.CREATED, {
            type: ReservationEventTypes.CREATED,
            reservation,
            request: command.data,
            account: command.account,
            timestamp: reservation.startedAt,
        })
        return reservation
    }

    async cancel(
        command: CancelReservationCommand,
        callback: () => Promise<AnyReservation>
    ) {
        const reservation = await callback()
        this.listener.emit(ReservationEventTypes.CANCELED, {
            type: ReservationEventTypes.CANCELED,
            reservation,
            account: command.account,
            timestamp: new Date(),
        })
        return reservation
    }

    async end(
        _command: EndReservationCommand,
        callback: () => Promise<AnyReservation>
    ) {
        const reservation = await callback()
        this.listener.emit(ReservationEventTypes.ENDED, {
            type: ReservationEventTypes.ENDED,
            reservation,
            timestamp: new Date(),
        })
        return reservation
    }
}
