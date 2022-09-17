import { render } from '@testing-library/react'
import Header from './Header'

describe('Header Component', () => {
  it('Should render title', () => {
    const { getByText } = render(<Header title="Título" />)
    expect(getByText('Título')).toBeInTheDocument()
  })
})
