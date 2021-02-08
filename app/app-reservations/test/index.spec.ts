import { AnyAccount, AccountType } from 'app-account'
import { EventEmitter } from 'events'
import { ReservationEventTypes } from '../lib/domain/reservationEnums'
import { Reservations } from '../lib/index'
import { TestImpl } from './support'

describe('client', () => {
    let subject: Reservations
    let account: AnyAccount

    beforeEach(() => {
        subject = Reservations.create({
            adapter: new TestImpl(),
            listener: new EventEmitter(),
        })
        account = { accountId: '', type: AccountType.USER }
    })

    it('simple', () => {
        expect(subject).toBeInstanceOf(Reservations)
    })

    it('events', async () => {
        const callback = jest.fn()
        subject.on(ReservationEventTypes.CREATED, callback)
        const request = { number: { number: '60295817' } }
        const reservation = await subject.create(account, request)
        expect(callback).toHaveBeenCalledWith({
            type: ReservationEventTypes.CREATED,
            account,
            reservation,
            request,
            timestamp: reservation.startedAt,
        })
    })
})
