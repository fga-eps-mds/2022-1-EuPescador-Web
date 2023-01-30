/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { saveToStorage } from '../storage'
import { deleteUser } from './deleteUser'

jest.mock('../adminServices/adminService', () => {
  return {
    adminService: {
      delete: jest.fn().mockResolvedValue({ status: 200 }),
    },
  }
})

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

  it('Shoud get status code 200', async() => {
    saveToStorage('UserData', JSON.stringify(myMockUserData))
    window.localStorage.getItem('UserData')

    const res = await deleteUser('1')
    expect(res).toBe(200)
  })

  it('Shoud user not admin', async() => {
    myMockUserData.superAdmin = false
    saveToStorage('UserData', JSON.stringify(myMockUserData))
    window.localStorage.getItem('UserData')

    const res = await deleteUser('1')
    expect(res).toBe(401)
  })
})
