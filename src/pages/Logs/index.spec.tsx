import { render, screen } from '@testing-library/react'
import FishLogs from '.'

jest.mock('react-router-dom')

describe('Logs page', () => {
  it('Should render page', () => {
    const { getByText } = render(<FishLogs />)
    console.log("###########", getByText)
  })
})
