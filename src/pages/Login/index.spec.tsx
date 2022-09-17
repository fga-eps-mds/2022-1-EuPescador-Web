import { render, screen, waitFor } from '@testing-library/react'
import Login from '.'
import { UserLogin } from '../../services/api/userServices/login'

jest.mock('react-router-dom')

describe('Login page', () => {
  it('Should render page', () => {
    const { getByText } = render(<Login />)
    const loginButton = getByText('Entrar')

    loginButton.click()

    expect(getByText('Entre na sua conta')).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
  })
  it('Register button should be render', () => {
    render(<Login />)
    const element = screen.getByText('Ainda não tem uma conta?')
    const style = getComputedStyle(element)
    expect(style.visibility).toBe('visible')
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

  it('Should render avatar', () => {
    const { getAllByTestId } = render(<Login />)
    const [avatar] = getAllByTestId('avatar')
    expect(avatar).toBeInTheDocument()
  })
})

export { }
