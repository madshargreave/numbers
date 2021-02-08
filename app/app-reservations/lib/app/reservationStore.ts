import { inject, injectable } from 'inversify'
import { ReservationDeps } from '../reservationDeps'
import { ReservationAdapter } from '../reservationAdapter'
import {
    AnyReservationLookup,
    AnyReservationQuery,
} from '../domain/reservationQueries'
import { isPhoneLookup, isReservationLookup } from '../domain/reservationGuards'

@injectable()
export class ReservationStore {
    constructor(
        @inject(ReservationDeps.ADAPTER) private adapter: ReservationAdapter
    ) {}

    async list(query: AnyReservationQuery) {
        return this.adapter.findByAccount(query.account)
    }

    async get(lookup: AnyReservationLookup) {
        const found = await this.getIfExists(lookup)
        if (!found) {
            throw new Error()
        }
        return found
    }

    getIfExists(lookup: AnyReservationLookup) {
        if (isReservationLookup(lookup)) {
            return this.adapter.findOne(lookup.reservation)
        }
        if (isPhoneLookup(lookup)) {
            return this.adapter.findOneByNumber(lookup.number)
        }
        return null
    }
}
