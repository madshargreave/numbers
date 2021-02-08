import { inject, injectable } from 'inversify'
import { CreateNumberAttrs } from './numberAttrs'
import { NumberFactory } from './numberFactory'

@injectable()
export class NumberAggregate {
    constructor(@inject(NumberFactory) private factory: NumberFactory) {}
    create(attrs: CreateNumberAttrs) {
        const created = this.factory.build(attrs)
        return created
    }
}
