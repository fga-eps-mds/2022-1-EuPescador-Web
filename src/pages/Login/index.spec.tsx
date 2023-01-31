import { render, screen } from '@testing-library/react'
import Login from '.'
import bg from '../../assets/images/background_login.png'

jest.mock('react-router-dom')

describe('Login page', () => {
  it('Should render page', () => {
    const { getByText } = render(<Login />)
    const loginButton = getByText('Entrar')

    loginButton.click()

    expect(getByText('Entre na sua conta')).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
  })

  it('Title color should be default', () => {
    render(<Login />)
    const element = screen.getByText('Entre na sua conta')
    const style = getComputedStyle(element)
    expect(style.backgroundColor).toBe('')
  })

  it('Title should be visible', () => {
    render(<Login />)
    const element = screen.getByText('Entre na sua conta')
    const style = getComputedStyle(element)
    expect(style.visibility).toBe('visible')
  })

  it('Should render logo', () => {
    render(<Login />)
    const element  = document.getElementsByClassName('logo')
    const style = getComputedStyle(element[0])
    expect(style.visibility).toBe('visible')
  })

  it('Should render first TextField', () => {
    render(<Login />)
    const element = document.getElementsByClassName('textfield')
    const style = getComputedStyle(element[0])
    expect(style.visibility).toBe('visible')
  })

  it('First TextField background color should be default', () => {
    render(<Login />)
    const element = document.getElementsByClassName('textfield')
    const style = getComputedStyle(element[0])
    expect(style.backgroundColor).toBe('')
  })

  it('Should render second TextField', () => {
    render(<Login />)
    const element = document.getElementsByClassName('textfield')
    const style = getComputedStyle(element[1])
    expect(style.visibility).toBe('visible')
  })

  it('Second TextField background color should be default', () => {
    render(<Login />)
    const element = document.getElementsByClassName('textfield')
    const style = getComputedStyle(element[1])
    expect(style.backgroundColor).toBe('')
  })

  it('Image should be visible', () => {
    render(<Login />)
    const element = document.getElementsByClassName('imagem')
    const style = getComputedStyle(element[0])
    expect(style.visibility).toBe('visible')
  })

  it('Image should be get by url', () => {
    render(<Login />)
    const element = document.getElementsByClassName('imagem')
    const style = getComputedStyle(element[0])
    expect(style.backgroundImage).toBe(`url(${bg})`)
  })
})

export { }
