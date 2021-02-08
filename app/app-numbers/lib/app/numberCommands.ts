import { CreateNumberAttrs } from '../domain/numberAttrs'

export interface CreateNumberCommand {
    data: CreateNumberAttrs
}

export interface CancelNumberCommand {}
