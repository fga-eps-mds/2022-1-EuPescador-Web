import { render } from '@testing-library/react'
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
})

export {}
