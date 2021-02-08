import { inject, injectable } from 'inversify'
import { CreateMessageRequest } from './messageRequests'
import { MessageFactory } from './messageFactory'

@injectable()
export class MessageAggregate {
    constructor(@inject(MessageFactory) private factory: MessageFactory) {}
    create(attrs: CreateMessageRequest) {
        const created = this.factory.build(attrs)
        return created
    }
}
