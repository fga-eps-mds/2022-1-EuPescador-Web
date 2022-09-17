import { render, waitFor } from '@testing-library/react'
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
})

export {}
