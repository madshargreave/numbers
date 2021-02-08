import { Reservation } from './reservationTypes'

export class ReservationError extends Error {
    constructor() {
        super()
        Object.setPrototypeOf(this, ReservationError.prototype)
    }
}

export class ReservationAlreadyExistsError extends ReservationError {
    constructor(private current: Reservation) {
        super()
        Object.setPrototypeOf(this, ReservationAlreadyExistsError.prototype)
    }
}
