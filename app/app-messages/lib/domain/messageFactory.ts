import { injectable } from 'inversify'
import { CreateMessageRequest } from './messageRequests'
import { Number } from './messageTypes'

@injectable()
export class MessageFactory {
    build(attrs: CreateMessageRequest): Number {
        return {}
    }
}
