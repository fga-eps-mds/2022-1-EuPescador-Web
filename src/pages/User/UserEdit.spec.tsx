/* eslint-disable @typescript-eslint/no-unsafe-return */
import { render } from '@testing-library/react'
import UserEdit from './UserEdit'
import Router, { BrowserRouter } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useNavigate: () => jest.fn(),
}))

describe('User Edit page', () => {
  it('Should render TitlePage page', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1234' })
    const { getByText } = render(
      <BrowserRouter>
        <UserEdit />
      </BrowserRouter>,
    )

    expect(getByText('Alterar Usuário')).toBeInTheDocument()
  })
})
