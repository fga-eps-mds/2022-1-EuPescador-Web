/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { saveToStorage } from '../storage'


const fakeLocalStorage = (function () {
  let store = {}

  return {
    getItem: function (key: number) {
      return store[key] || null
    },
    setItem: function (key, value: string) {
      store[key] = value.toString()
    },
    removeItem: function (key: number) {
      delete store[key]
    },
    clear: function () {
      store = {}
    },
  }
})()

describe('User Service Test', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    })
  })

  const myMockUserData = {
    id: 'sss',
    superAdmin: true,
    admin: true,
    token: '123',
  }

  it('Deve criar o token', () => {
    saveToStorage('UserData', JSON.stringify(myMockUserData))
    const localStorage = window.localStorage.getItem('UserData')
    expect(localStorage).not.toBeUndefined()
  }, 700000)
})
