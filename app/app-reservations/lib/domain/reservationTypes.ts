import { NumberReference } from 'app-numbers'
import { ReservationStatus } from './reservationEnums'
import { ReservationReference } from './reservationValues'

export interface Reservation<TStatus extends ReservationStatus>
    extends ReservationReference {
    status: TStatus
    number: NumberReference
}

export interface ActiveReservation
    extends Reservation<ReservationStatus.ACTIVE> {
    startedAt: Date
}

export interface EndedReservation extends Reservation<ReservationStatus.ENDED> {
    startedAt: Date
    endedAt: Date
}

export type AnyReservation = ActiveReservation | EndedReservation
