import { injectable } from 'inversify'
import { ReservationStatus } from './reservationEnums'
import { CreateReservationRequest } from './reservationRequests'
import { ActiveReservation } from './reservationTypes'

@injectable()
export class ReservationFactory {
    build(request: CreateReservationRequest): ActiveReservation {
        const now = new Date()
        return {
            reservationId: '',
            status: ReservationStatus.ACTIVE,
            number: request.number,
            startedAt: now,
        }
    }
}
