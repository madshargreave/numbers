import { EventEmitter } from 'events'
import { AnyReservationEvent } from '../domain/reservationEvents'

export interface ReservationListener extends Omit<EventEmitter, 'on' | 'emit'> {
    on<T extends AnyReservationEvent, TKind extends T['type']>(
        eventType: TKind,
        callback: (event: Extract<T, { type: TKind }>) => void
    ): void
    emit<T extends AnyReservationEvent>(eventType: T['type'], payload: T): void
}
