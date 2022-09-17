import { render } from '@testing-library/react'
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

})
