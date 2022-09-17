import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header Component', () => {
  it('Should render title', () => {
    const { getByText } = render(<Header title="Título" />)
    expect(getByText('Título')).toBeInTheDocument()
  })

  it('Should render avatar', () => {
    const { getAllByTestId } = render(<Header title="Título" />)
    const [avatar] = getAllByTestId('avatar')
    expect(avatar).toBeInTheDocument()
  })

  it('Should render username', () => {
    const { getByText } = render(<Header title="Título" />)
    expect(getByText('Nome')).toBeInTheDocument()
  })

  it('Should render type of user', () => {
    const { getByText } = render(<Header title="Título" />)
    expect(getByText('Usuário')).toBeInTheDocument()
  })

  it('Title color should be default', () => {
    render(<Header title="Título" />)
    const element = screen.getByText('Título')
    const style = getComputedStyle(element)
    expect(style.backgroundColor).toBe('')
  })

  it('Header Background should be white', () => {
    render(<Header title="Título" />)
    const element = document.getElementsByClassName('appbar')
    const style = getComputedStyle(element[0])
    expect(style.backgroundColor).toBe('white')
  })

  it('Header should be visible', () => {
    render(<Header title="Título" />)
    const element = document.getElementsByClassName('appbar')
    const style = getComputedStyle(element[0])
    expect(style.visibility).toBe('visible')
  })

  it('Check if width is 100%', () => {
    render(<Header title="Título" />)
    const element = document.getElementsByClassName('appbar')
    const style = getComputedStyle(element[0])
    expect(style.width).toBe('100%')
  })
  it('Check if font-color is black', () => {
    render(<Header title="Título" />)
    const element = document.getElementsByClassName('appbar')
    const style = getComputedStyle(element[0])
    expect(style.color).toBe('black')
  })
})
