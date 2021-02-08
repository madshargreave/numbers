import { inject, injectable } from 'inversify'
import { Twilio } from 'twilio'
import { TwilioDeps } from '../twilioDeps'

@injectable()
export class NumberGateway {
    constructor(@inject(TwilioDeps.CLIENT) private client: Twilio) {}

    list() {
        return this.client.numbers.v2.page({})
    }

    get() {
        return this.client.availablePhoneNumbers('')
    }
}
