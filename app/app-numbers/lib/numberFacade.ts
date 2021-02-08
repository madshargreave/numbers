import { injectable } from 'inversify'
import { NumberService } from './app/numberService'
import { NumberStore } from './app/numberStore'
import { CreateNumberAttrs } from './domain/numberAttrs'
import { NumberReference } from './domain/numberValues'
import { NumberConfig } from './numberConfig'
import { NumberContainer } from './numberContainer'

@injectable()
export class Numbers {
    #service: NumberService
    #store: NumberStore

    static create(config: NumberConfig) {
        return new Numbers(config)
    }

    constructor(config: NumberConfig) {
        const container = new NumberContainer(config)
        this.#service = container.get(NumberService)
        this.#store = container.get(NumberStore)
    }

    list() {
        return this.#store.find()
    }

    get(number: NumberReference) {
        return this.#store.get(number)
    }

    create(data: CreateNumberAttrs) {
        return this.#service.create({ data })
    }

    cancel(number: NumberReference) {
        return
    }
}
