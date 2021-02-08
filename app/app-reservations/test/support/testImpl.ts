import { ReservationAdapter } from '../../lib'

export class TestImpl implements ReservationAdapter {
    async findByAccount() {
        return []
    }
    async findOne() {
        return null
    }
    async findOneByNumber() {
        return null
    }
}
