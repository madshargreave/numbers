import { injectable } from 'inversify'
import { CreateNumberAttrs } from './numberAttrs'
import { Number } from './numberTypes'

@injectable()
export class NumberFactory {
    build(attrs: CreateNumberAttrs): Number {
        return {}
    }
}
