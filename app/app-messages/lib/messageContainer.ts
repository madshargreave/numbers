import { Container } from 'inversify'
import { MessageService } from './app/messageService'
import { MessageStore } from './app/messageStore'
import { MessageAggregate } from './domain/messageAggregate'
import { MessageFactory } from './domain/messageFactory'
import { NumberConfig } from './messageConfig'
import { MessageDeps } from './messageDeps'

export class MessageContainer extends Container {
    constructor(config: NumberConfig) {
        super()
        this.bind(MessageService).toSelf()
        this.bind(MessageStore).toSelf()
        this.bind(MessageAggregate).toSelf()
        this.bind(MessageFactory).toSelf()
        this.bind(MessageDeps.ADAPTER).toConstantValue(config.adapter)
    }
}
