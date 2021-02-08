import { AnyAccount } from 'app-account'
import { CreateReservationRequest } from './reservationRequests'
import { ReservationReference } from './reservationValues'
import { ReservationEventTypes } from './reservationEnums'

interface ReservationEvent<TType extends ReservationEventTypes> {
    type: TType
    reservation: ReservationReference
    timestamp: Date
}

export interface ReservationCreatedEvent
    extends ReservationEvent<ReservationEventTypes.CREATED> {
    request: CreateReservationRequest
    account: AnyAccount
}

export interface ReservationCanceledEvent
    extends ReservationEvent<ReservationEventTypes.CANCELED> {
    account: AnyAccount
}

export interface ReservationEndedEvent
    extends ReservationEvent<ReservationEventTypes.ENDED> {}

export type AnyReservationEvent =
    | ReservationCreatedEvent
    | ReservationCanceledEvent
    | ReservationEndedEvent
