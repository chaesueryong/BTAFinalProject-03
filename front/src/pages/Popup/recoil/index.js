import { atom } from 'recoil';

export const pageState = atom({
    key: 'page',
    default: 'Login'
})