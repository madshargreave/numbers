import { injectable } from 'inversify'
import { MessageService } from './app/messageService'
import { MessageStore } from './app/messageStore'
import { CreateMessageRequest } from './domain/messageRequests'
import { MessageReference } from './domain/messageValues'
import { NumberConfig } from './messageConfig'
import { MessageContainer } from './messageContainer'

@injectable()
export class Messages {
    #service: MessageService
    #store: MessageStore

    static create(config: NumberConfig) {
        return new Messages(config)
    }

    constructor(config: NumberConfig) {
        const container = new MessageContainer(config)
        this.#service = container.get(MessageService)
        this.#store = container.get(MessageStore)
    }

    list() {
        return this.#store.find()
    }

    get(number: MessageReference) {
        return this.#store.get(number)
    }

    create(data: CreateMessageRequest) {
        return this.#service.create({ data })
    }
}
