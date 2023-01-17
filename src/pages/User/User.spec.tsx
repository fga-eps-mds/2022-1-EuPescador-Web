import { render } from '@testing-library/react'
import User from './User'

jest.mock('react-router-dom')

describe('User page', () => {
  it('Should render TitlePage page', () => {
    const { getByText } = render(<User />)

    expect(getByText('Gerência de Usuários')).toBeInTheDocument()
  })
})
