import { ReservationListener } from './app/reservationListener'
import { ReservationAdapter } from './reservationAdapter'

export interface ReservationProviderConfig {
    adapter: ReservationAdapter
    listener?: ReservationListener
}

export interface ReservationConfig {
    adapter: ReservationAdapter
    listener: ReservationListener
}
