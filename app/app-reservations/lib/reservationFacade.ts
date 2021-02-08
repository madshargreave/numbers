import { injectable } from 'inversify'
import { EventEmitter } from 'events'
import { AnyAccount } from '../../app-account/lib'
import { ReservationListener } from './app/reservationListener'
import { ReservationService } from './app/reservationService'
import { ReservationStore } from './app/reservationStore'
import { AnyReservationEvent } from './domain/reservationEvents'
import { AnyReservationLookup } from './domain/reservationQueries'
import { CreateReservationRequest } from './domain/reservationRequests'
import { ReservationReference } from './domain/reservationValues'
import { ReservationAuthorizer } from './reservationAuthorizer'
import {
    ReservationConfig,
    ReservationProviderConfig,
} from './reservationConfig'
import { AppContainer } from './reservationContainer'
import { ReservationDeps } from './reservationDeps'

@injectable()
export class Reservations {
    #service: ReservationService
    #store: ReservationStore
    #authorizer: ReservationAuthorizer
    #listener: ReservationListener

    static create(config: ReservationProviderConfig) {
        return new Reservations({
            ...config,
            listener: config.listener ?? new EventEmitter(),
        })
    }

    constructor(config: ReservationConfig) {
        const container = new AppContainer(config)
        this.#service = container.get(ReservationService)
        this.#store = container.get(ReservationStore)
        this.#authorizer = container.get(ReservationAuthorizer)
        this.#listener = container.get(ReservationDeps.LISTENER)
    }

    list(account: AnyAccount) {
        const command = this.#authorizer.list(account)
        return this.#store.list(command)
    }

    get(account: AnyAccount, lookup: AnyReservationLookup) {
        const command = this.#authorizer.get(account, lookup)
        return this.#store.get(command)
    }

    create(account: AnyAccount, request: CreateReservationRequest) {
        const command = this.#authorizer.create(account, request)
        return this.#service.create(command)
    }

    cancel(account: AnyAccount, reservation: ReservationReference) {
        const command = this.#authorizer.cancel(account, reservation)
        return this.#service.cancel(command)
    }

    on<T extends AnyReservationEvent, TKind extends T['type']>(
        eventType: TKind,
        callback: (event: Extract<T, { type: TKind }>) => void
    ) {
        this.#listener.on(eventType, callback)
        return this
    }
}
