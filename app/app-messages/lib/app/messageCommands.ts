import { CreateMessageRequest } from '../domain/messageRequests'

export interface CreateMessageCommand {
    data: CreateMessageRequest
}
