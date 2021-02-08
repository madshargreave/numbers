import { inject, injectable } from 'inversify'
import { MessageStore } from './messageStore'
import { CreateMessageCommand } from './messageCommands'
import { MessageAggregate } from '../domain/messageAggregate'

@injectable()
export class MessageService {
    constructor(
        @inject(MessageStore) private store: MessageStore,
        @inject(MessageAggregate) private aggregate: MessageAggregate
    ) {}

    create(command: CreateMessageCommand) {
        const created = this.aggregate.create(command.data)
        return created
    }
}
