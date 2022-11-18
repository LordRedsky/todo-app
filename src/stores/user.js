import { defineStore } from 'pinia'

export default defineStore('user', {
    state: () => ({
        email: 'redsky@mail.com'
    })
})