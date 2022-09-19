import { render, screen } from '@testing-library/react'
import Data from './Datas'
import { GetWikiFishes } from '../../services/api/wikiServices/getWikiFishes'

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

  it('Title color should be default', () => {
    render(<Data />)
    const element = screen.getByText('Listagem de Peixes')
    const style = getComputedStyle(element)
    expect(style.backgroundColor).toBe('')
  })

  it('Title should be visible', () => {
    render(<Data />)
    const element = screen.getByText('Listagem de Peixes')
    const style = getComputedStyle(element)
    expect(style.visibility).toBe('visible')
  })

  it('Title should be visible', () => {
    render(<Data />)
    const element = screen.getByText('Listagem de Peixes')
    const style = getComputedStyle(element)
    expect(style.visibility).toBe('visible')
  })

  it('Width should be correct', () => {
    render(<Data />)
    const element = document.getElementsByClassName('fishcard')
    const style = getComputedStyle(element[0])
    expect(style.width).toBe('100%')
  })
})

export {}
