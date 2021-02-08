import { AccountReference } from 'app-account'
import { NumberReference } from 'app-numbers'
import { AnyReservation } from './domain/reservationTypes'
import { ReservationReference } from './domain/reservationValues'

export interface ReservationAdapter {
    findByAccount: (account: AccountReference) => Promise<AnyReservation[]>
    findOne: (number: ReservationReference) => Promise<AnyReservation | null>
    findOneByNumber: (number: NumberReference) => Promise<AnyReservation | null>
}
