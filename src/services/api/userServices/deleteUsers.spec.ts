import { saveToStorage } from '../storage'
// import { deleteUser } from './deleteUser'

const fakeLocalStorage = (function () {
  let store = {}

  return {
    getItem: function (key) {
      return store[key] || null
    },
    setItem: function (key, value) {
      store[key] = value.toString()
    },
    removeItem: function (key) {
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

  it('Deve criar o token', async () => {
    saveToStorage('UserData', JSON.stringify(myMockUserData))
    const localStorage = window.localStorage.getItem('UserData')
    expect(localStorage).not.toBeUndefined()
  }, 700000)
})
