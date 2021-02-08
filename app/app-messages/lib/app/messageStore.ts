import { inject, injectable } from 'inversify'
import { MessageDeps } from '../messageDeps'
import { NumberAdapter } from '../messageAdapter'
import { MessageReference } from '../domain/messageValues'

@injectable()
export class MessageStore {
    constructor(@inject(MessageDeps.ADAPTER) private adapter: NumberAdapter) {}

    find() {
        return []
    }

    get(Number: MessageReference) {
        return null
    }
}
