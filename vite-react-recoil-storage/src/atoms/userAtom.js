import { atom } from "recoil";
import { recoilPersist } from "./recoilPersist";

const { persistAtom } = recoilPersist()

export const userAtom = atom({
  key: 'userAtom',
  default: null,
  effects: [persistAtom]
})