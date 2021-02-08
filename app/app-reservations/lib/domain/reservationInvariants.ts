import { injectable } from 'inversify'
import { ReservationAlreadyExistsError } from './reservationErrors'
import { ActiveReservation, AnyReservation } from './reservationTypes'
import { isActive, isEnded } from './reservationUtils'

@injectable()
export class ReservationInvariants {
    assertCanReserve(current: AnyReservation | null) {
        if (!current || isEnded(current)) {
            return
        }
        throw new ReservationAlreadyExistsError(current)
    }

    assertIsActive(
        reservation: AnyReservation
    ): asserts reservation is ActiveReservation {
        if (isActive(reservation)) {
            return
        }
        throw new Error()
    }
}
