import { ReservationStatus } from './reservationEnums'
import {
    ActiveReservation,
    AnyReservation,
    EndedReservation,
} from './reservationTypes'

export function isActive(
    reservation: AnyReservation
): reservation is ActiveReservation {
    return reservation.status === ReservationStatus.ACTIVE
}

export function isEnded(
    reservation: AnyReservation
): reservation is EndedReservation {
    return reservation.status === ReservationStatus.ENDED
}
