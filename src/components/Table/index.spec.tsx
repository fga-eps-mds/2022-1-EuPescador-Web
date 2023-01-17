import { getByTestId, render } from '@testing-library/react'
import TableComponent from '.'

describe('Table component', () => {
  const columns = [
    {
      label: 'Id',
      value: 'id',
    },
    {
      label: 'Nome',
      value: 'name',
    },
  ]

  const rows = [
    {
      id: 1,
      name: 'Test 1',
    },
    {
      id: 2,
      name: 'Test 2',
    },
  ]

  it('Should render component', () => {
    const { getByText } = render(<TableComponent columns={columns} rows={rows} />)

    expect(getByText(columns[1].label)).toBeInTheDocument()
    expect(getByText(rows[0].name)).toBeInTheDocument()
  })

  it('Should render edit button', () => {
    const onEditMocked = jest.fn()
    const { getAllByTestId } = render(<TableComponent columns={columns} rows={rows} onEdit={onEditMocked} />)
    const [editButton] = getAllByTestId(`editButton`)
    editButton.click()

    expect(editButton).toBeInTheDocument()
    expect(onEditMocked).toBeCalled()
  })

  it('Should render delete button', () => {
    const onDeleteMocked = jest.fn()
    const { getAllByTestId } = render(<TableComponent columns={columns} rows={rows} onDelete={onDeleteMocked} />)
    const [deleteButton] = getAllByTestId('deleteButton')
    deleteButton.click()

    expect(deleteButton).toBeInTheDocument()
    expect(onDeleteMocked).toBeCalled()
  })
})

export {}
