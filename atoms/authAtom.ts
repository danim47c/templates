import { atom } from "jotai"

export interface authUserType {
  uid: string
  name: string
  avatar: string
}

export type authType = undefined | null | authUserType

const authAtom = atom<authType>(undefined)

export default authAtom
