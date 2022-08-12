/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-types */
import { Delete, Edit } from '@mui/icons-material'
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface RowProp {
  [key: string]: number
}

interface ColumnProp {
  label: string
  value: string
}

interface TableProps {
  columns: ColumnProp[]
  rows: RowProp[]
  onDelete?: (row: RowProp) => void
  onEdit?: (row: RowProp) => void
}

export default function TableComponent({ rows, columns, onDelete, onEdit }: TableProps) {
  const result = rows.map((row) => {
    const display = columns.map((column) => row[column.value])
    return display
  })

  return (
    <TableContainer
      sx={{
        minWidth: 650,
        '& .MuiTableRow-root': {
          backgroundColor: 'white',
        },
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#DDDFE4',
        padding: 5,
        fontWeight: 700,
        '& .MuiTableCell-body': {
          color: '#666D81',
        },
        '& .MuiTableCell-head': {
          fontWeight: 600,
          fontSize: '1rem',
        },
      }}
    >
      <Table
        sx={{
          minWidth: 650,
        }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell component="th">{column.label}</TableCell>
            ))}
            {onEdit && <TableCell component="th">Editar</TableCell>}
            {onDelete && <TableCell component="th">Deletar</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((row, index) => (
            <TableRow>
              {row.map((data) => (
                <TableCell>{data}</TableCell>
              ))}
              {onEdit && (
                <TableCell>
                  <IconButton onClick={() => onEdit(rows[index])} color="warning">
                    <Edit />
                  </IconButton>
                </TableCell>
              )}
              {onDelete && (
                <TableCell>
                  <IconButton onClick={() => onDelete(rows[index])} color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
