import { inject, injectable } from 'inversify'
import { NumberDeps } from '../numberDeps'
import { NumberAdapter } from '../numberAdapter'
import { NumberReference } from '../domain/numberValues'

@injectable()
export class NumberStore {
    constructor(@inject(NumberDeps.ADAPTER) private adapter: NumberAdapter) {}

    find() {
        return []
    }

    get(Number: NumberReference) {
        return null
    }
}
