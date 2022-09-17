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
})

export {}
