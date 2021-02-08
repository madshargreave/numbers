import { Container } from 'inversify'
import { NumberService } from './numberService'
import { NumberGateway } from './numberGateway'
import { TwilioConfig } from '../twilioConfig'
import { TwilioDeps } from '../twilioDeps'

export class NumberContainer extends Container {
    constructor(config: TwilioConfig) {
        super()
        this.bind(NumberService).toSelf()
        this.bind(NumberGateway).toSelf()
        this.bind(TwilioDeps.CLIENT).toConstantValue(config.client)
    }
}
