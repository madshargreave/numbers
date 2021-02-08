import { injectable } from 'inversify'
import { ReservationService } from './app/reservationService'
import { ReservationStore } from './app/reservationStore'
import { AnyReservationLookup } from './domain/reservationQueries'
import { ReservationReference } from './domain/reservationValues'
import { ReservationConfig } from './reservationConfig'
import { AppContainer } from './reservationContainer'

@injectable()
export class ReservationAdmin {
    #service: ReservationService
    #store: ReservationStore

    static create(config: ReservationConfig) {
        return new ReservationAdmin(config)
    }

    constructor(config: ReservationConfig) {
        const container = new AppContainer(config)
        this.#service = container.get(ReservationService)
        this.#store = container.get(ReservationStore)
    }

    get(lookup: AnyReservationLookup) {
        return this.#store.get(lookup)
    }

    end(reservation: ReservationReference) {
        return this.#service.end({ reservation })
    }
}
