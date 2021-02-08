import {
    AnyReservationLookup,
    ReservationByNumberLookup,
    ReservationLookup,
} from './reservationQueries'

export function isReservationLookup(
    lookup: AnyReservationLookup
): lookup is ReservationLookup {
    return !!(lookup as ReservationLookup).reservation
}

export function isPhoneLookup(
    lookup: AnyReservationLookup
): lookup is ReservationByNumberLookup {
    return !!(lookup as ReservationByNumberLookup).number
}
