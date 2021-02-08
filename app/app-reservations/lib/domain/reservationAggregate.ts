import { inject, injectable } from 'inversify'
import { CreateReservationRequest } from './reservationRequests'
import { ReservationFactory } from './reservationFactory'
import { ReservationInvariants } from './reservationInvariants'
import { AnyReservation, EndedReservation } from './reservationTypes'
import { ReservationStatus } from './reservationEnums'

@injectable()
export class ReservationAggregate {
    constructor(
        @inject(ReservationFactory) private factory: ReservationFactory,
        @inject(ReservationInvariants) private invariants: ReservationInvariants
    ) {}

    create(current: AnyReservation | null, attrs: CreateReservationRequest) {
        const created = this.factory.build(attrs)
        this.invariants.assertCanReserve(current)
        return created
    }

    end(reservation: AnyReservation): EndedReservation {
        this.invariants.assertIsActive(reservation)
        const now = new Date()
        return { ...reservation, status: ReservationStatus.ENDED, endedAt: now }
    }
}
