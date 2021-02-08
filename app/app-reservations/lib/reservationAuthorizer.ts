import { AnyAccount } from 'app-account'
import { injectable } from 'inversify'
import {
    CancelReservationCommand,
    CreateReservationCommand,
} from './app/reservationCommands'
import {
    AnyReservationLookup,
    AnyReservationQuery,
} from './domain/reservationQueries'
import { CreateReservationRequest } from './domain/reservationRequests'
import { ReservationReference } from './domain/reservationValues'

@injectable()
export class ReservationAuthorizer {
    list(account: AnyAccount): AnyReservationQuery {
        return { account }
    }

    get(
        account: AnyAccount,
        lookup: AnyReservationLookup
    ): AnyReservationLookup {
        return lookup
    }

    create(
        account: AnyAccount,
        data: CreateReservationRequest
    ): CreateReservationCommand {
        return { account, data }
    }

    cancel(
        account: AnyAccount,
        reservation: ReservationReference
    ): CancelReservationCommand {
        return { account, reservation }
    }
}
