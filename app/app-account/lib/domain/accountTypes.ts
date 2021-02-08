import { AccountType } from './accountEnums'
import { AccountReference } from './accountValues'

export interface UserAccount extends AccountReference {
    type: AccountType.USER
}

export type AnyAccount = UserAccount
