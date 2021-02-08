import { AnyAccount } from 'app-account'
import { NumberReference } from 'app-numbers'
import { ReservationReference } from './reservationValues'

export interface ListReservationByAccountQuery {
    account: AnyAccount
}

export type AnyReservationQuery = ListReservationByAccountQuery

export interface ReservationLookup {
    reservation: ReservationReference
}

export interface ActiveReservationLookup extends ReservationLookup {
    reservation: ReservationReference
    active: true
}

export interface ReservationByNumberLookup {
    number: NumberReference
}

export type AnyReservationLookup =
    | ReservationLookup
    | ActiveReservationLookup
    | ReservationByNumberLookup
