import { inject, injectable } from 'inversify'
import { NumberStore } from './numberStore'
import { CreateNumberCommand, CancelNumberCommand } from './numberCommands'
import { NumberAggregate } from '../domain/numberAggregate'

@injectable()
export class NumberService {
    constructor(
        @inject(NumberStore) private store: NumberStore,
        @inject(NumberAggregate) private aggregate: NumberAggregate
    ) {}

    create(command: CreateNumberCommand) {
        const created = this.aggregate.create(command.data)
        return created
    }

    cancel(command: CancelNumberCommand) {
        return
    }
}
