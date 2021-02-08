import { AnyAccount } from 'app-account'
import { AnyReservationLookup } from '../domain/reservationQueries'
import { CreateReservationRequest } from '../domain/reservationRequests'
import { ReservationReference } from '../domain/reservationValues'

export interface ListReservationsCommand {
    account: AnyAccount
}

export interface LookupReservationCommand {
    account: AnyAccount
    data: AnyReservationLookup
}

export interface CreateReservationCommand {
    account: AnyAccount
    data: CreateReservationRequest
}

export interface CancelReservationCommand {
    account: AnyAccount
    reservation: ReservationReference
}

export interface EndReservationCommand {
    reservation: ReservationReference
}
