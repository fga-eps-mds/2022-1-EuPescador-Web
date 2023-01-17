import { render } from '@testing-library/react'
import Data from './Datas'

jest.mock('react-router-dom')

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => JSON.stringify({ admin: 'isAdmin' })),
      setItem: jest.fn(() => null),
    },
    writable: true,
  })
})

describe('Login page', () => {
  it('Should render page', () => {
    const { getByText } = render(<Data />)

    expect(getByText('Listagem de Peixes')).toBeInTheDocument()
  })
})

export {}
