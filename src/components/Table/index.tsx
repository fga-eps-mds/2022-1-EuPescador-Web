/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-types */
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import editIcon from "../../assets/icons/senha_simbolo3.svg"
import deleteIcon from "../../assets/icons/excluir_simbolo1.svg"

interface RowProp {
  [key: string]: string | number
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

export default function TableComponent({ rows, columns, onDelete, onEdit}: TableProps) {
  const result = rows.map((row) => {
    const display = columns.map((column) => row[column.value])
    return display
  })

  return (
    <>
    <TableContainer
      sx={{
        minWidth: 650,
        width: "95%",
        '& .MuiTableRow-root': {
          backgroundColor: 'white',
        },
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 8,
        borderColor: '#0095D9',
        padding: 5,
        fontWeight: 700,
        '& .MuiTableCell-body': {
          color: '#000000',
          borderBottom: "solid 2px #0095D9"
        },
        '& .MuiTableCell-head': {
          fontWeight: 600,
          fontSize: '1rem',
          color: '#0095D9',
          borderBottom: "solid 2px #0095D9"
        },
        '& .MuiTableHead-root':{
          borderBottom: "solid 2px #0095D9"
        }
      }}
    >
      <Table
        sx={{
          minWidth: 650
        }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.label} component="th">
                {column.label}
              </TableCell>
            ))}
            {onEdit && <TableCell component="th">Editar</TableCell>}
            {onDelete && <TableCell component="th">Deletar</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((row, index) => (
            <TableRow key={index} data-testid={`rowTable-${index}`}>
              {row.map((data, index) => (
                <TableCell key={index}>{data}</TableCell>
              ))}
              {onEdit && (
                <TableCell>
                  <IconButton  onClick={() => onEdit(rows[index])} >
                    <img src={editIcon} data-testid={`editButton`} style={{width: "25px", height: "30px"}}/>
                  </IconButton>
                </TableCell>
              )}
              {onDelete && (
                <TableCell>
                  <IconButton data-testid="deleteButton" onClick={() => onDelete(rows[index])}>
                  <img src={deleteIcon} style={{width: "25px", height: "25px"}}/>
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  )
}
