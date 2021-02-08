import { Container } from 'inversify'
import { NumberService } from './app/numberService'
import { NumberStore } from './app/numberStore'
import { NumberAggregate } from './domain/numberAggregate'
import { NumberFactory } from './domain/numberFactory'
import { NumberConfig } from './numberConfig'
import { NumberDeps } from './numberDeps'

export class NumberContainer extends Container {
    constructor(config: NumberConfig) {
        super()
        this.bind(NumberService).toSelf()
        this.bind(NumberStore).toSelf()
        this.bind(NumberAggregate).toSelf()
        this.bind(NumberFactory).toSelf()
        this.bind(NumberDeps.ADAPTER).toConstantValue(config.adapter)
    }
}
