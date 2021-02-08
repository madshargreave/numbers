import { NumberAdapter } from 'app-numbers'
import { TwilioConfig } from '../twilioConfig'
import { NumberContainer } from './numberContainer'
import { NumberGateway } from './numberGateway'
import { NumberService } from './numberService'

export class TwilioNumbers implements NumberAdapter {
    #service: NumberService
    #gateway: NumberGateway

    static create(config: TwilioConfig) {
        return new TwilioNumbers(config)
    }

    constructor(config: TwilioConfig) {
        const container = new NumberContainer(config)
        this.#service = container.get(NumberService)
        this.#gateway = container.get(NumberGateway)
    }

    async find() {
        return []
    }
}
