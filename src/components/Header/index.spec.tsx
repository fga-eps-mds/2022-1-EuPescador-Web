import { render } from '@testing-library/react'
import Header from './index'

describe('Header Component', () => {
  it('Should render avatar', () => {
    const { getAllByTestId } = render(<Header />)
    const [avatar] = getAllByTestId('avatar')
    expect(avatar).toBeInTheDocument()
  })

  it('Should render username', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Nome')).toBeInTheDocument()
  })

  it('Should render type of user', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Usuário')).toBeInTheDocument()
  })

  it('Header Background should be white', () => {
    render(<Header />)
    const element = document.getElementsByClassName('appbar')
    const style = getComputedStyle(element[0])
    expect(style.backgroundColor).toBe('white')
  })

  it('Header should be visible', () => {
    render(<Header />)
    const element = document.getElementsByClassName('appbar')
    const style = getComputedStyle(element[0])
    expect(style.visibility).toBe('visible')
  })

  it('Check if width is 100%', () => {
    render(<Header />)
    const element = document.getElementsByClassName('appbar')
    const style = getComputedStyle(element[0])
    expect(style.width).toBe('100%')
  })
  it('Check if font-color is black', () => {
    render(<Header />)
    const element = document.getElementsByClassName('appbar')
    const style = getComputedStyle(element[0])
    expect(style.color).toBe('black')
  })
})
