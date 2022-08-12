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
          <TableRow></TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  )
}
