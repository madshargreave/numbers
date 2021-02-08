import { Container } from 'inversify'
import { ReservationConfig } from './reservationConfig'
import { ReservationService } from './app/reservationService'
import { ReservationStore } from './app/reservationStore'
import { ReservationDeps } from './reservationDeps'
import { ReservationAggregate } from './domain/reservationAggregate'
import { ReservationFactory } from './domain/reservationFactory'
import { ReservationInvariants } from './domain/reservationInvariants'
import { ReservationAuthorizer } from './reservationAuthorizer'
import { ReservationTracer } from './app/reservationTracer'

export class AppContainer extends Container {
    constructor(config: ReservationConfig) {
        super()
        this.bind(ReservationService).toSelf()
        this.bind(ReservationStore).toSelf()
        this.bind(ReservationAggregate).toSelf()
        this.bind(ReservationFactory).toSelf()
        this.bind(ReservationInvariants).toSelf()
        this.bind(ReservationAuthorizer).toSelf()
        this.bind(ReservationTracer).toSelf()
        this.bind(ReservationDeps.ADAPTER).toConstantValue(config.adapter)
        this.bind(ReservationDeps.LISTENER).toConstantValue(config.listener)
    }
}
