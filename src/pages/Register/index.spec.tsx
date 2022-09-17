import { render, screen } from '@testing-library/react'
import Register from '.'

jest.mock('react-router-dom')

describe('Register page', () => {
  it('Should render page', () => {
    const { getByText } = render(<Register />)
    const registerButton = getByText('Criar')

    registerButton.click()

    expect(getByText('Crie sua conta')).toBeInTheDocument()
    expect(registerButton).toBeInTheDocument()
  })

  it('Login button should be render', () => {
    render(<Register />)
    const element = screen.getByText('Já tem uma conta?')
    const style = getComputedStyle(element)
    expect(style.visibility).toBe('visible')
  })

  it('Title color should be default', () => {
    render(<Register />)
    const element = screen.getByText('Crie sua conta')
    const style = getComputedStyle(element)
    expect(style.backgroundColor).toBe('')
  })

  it('Title should be visible', () => {
    render(<Register />)
    const element = screen.getByText('Crie sua conta')
    const style = getComputedStyle(element)
    expect(style.visibility).toBe('visible')
  })

  it('Should render avatar', () => {
    const { getAllByTestId } = render(<Register />)
    const [avatar] = getAllByTestId('avatar')
    expect(avatar).toBeInTheDocument()
  })

  it('Should render email TextField', () => {
    render(<Register />)
    const element = document.getElementsByClassName('textfield')
    const style = getComputedStyle(element[0])
    expect(style.visibility).toBe('visible')
  })

  it('Email TextField background color should be default', () => {
    render(<Register />)
    const element = document.getElementsByClassName('textfield')
    const style = getComputedStyle(element[0])
    expect(style.backgroundColor).toBe('')
  })

  it('Should render password TextField', () => {
    render(<Register />)
    const element = document.getElementsByClassName('textfield')
    const style = getComputedStyle(element[1])
    expect(style.visibility).toBe('visible')
  })

  it('Password TextField background color should be default', () => {
    render(<Register />)
    const element = document.getElementsByClassName('textfield')
    const style = getComputedStyle(element[1])
    expect(style.backgroundColor).toBe('')
  })

  it('Image should be visible', () => {
    render(<Register />)
    const element = document.getElementsByClassName('imagem')
    const style = getComputedStyle(element[0])
    expect(style.visibility).toBe('visible')
  })
})

export { }
