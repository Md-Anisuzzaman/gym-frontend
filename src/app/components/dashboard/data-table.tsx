// "use client"

// import { useState } from 'react'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Button } from "@/components/ui/button"

// interface DataTableProps {
//   data: any[]
//   columns: { key: string; label: string }[]
// }

// export function DataTable({ data, columns }: DataTableProps) {
//   const [selectedRows, setSelectedRows] = useState<string[]>([])

//   const toggleRow = (id: string) => {
//     setSelectedRows(prev =>
//       prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
//     )
//   }

//   const toggleAll = () => {
//     setSelectedRows(prev => prev.length === data.length ? [] : data.map(row => row.id))
//   }

//   const exportCSV = () => {
//     const selectedData = data.filter(row => selectedRows.includes(row.id))
//     const csv = [
//       columns.map(col => col.label).join(','),
//       ...selectedData.map(row => columns.map(col => row[col.key]).join(','))
//     ].join('\n')

//     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
//     const link = document.createElement('a')
//     if (link.download !== undefined) {
//       const url = URL.createObjectURL(blob)
//       link.setAttribute('href', url)
//       link.setAttribute('download', 'export.csv')
//       link.style.visibility = 'hidden'
//       document.body.appendChild(link)
//       link.click()
//       document.body.removeChild(link)
//     }
//   }

//   return (
//     <div>
//       <Button onClick={exportCSV} disabled={selectedRows.length === 0} className="mb-4">
//         Export Selected to CSV
//       </Button>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[50px]">
//               <Checkbox
//                 checked={selectedRows.length === data.length}
//                 onCheckedChange={toggleAll}
//               />
//             </TableHead>
//             {columns.map(column => (
//               <TableHead key={column.key}>{column.label}</TableHead>
//             ))}
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {data.map(row => (
//             <TableRow key={row.id}>
//               <TableCell>
//                 <Checkbox
//                   checked={selectedRows.includes(row.id)}
//                   onCheckedChange={() => toggleRow(row.id)}
//                 />
//               </TableCell>
//               {columns.map(column => (
//                 <TableCell key={`${row.id}-${column.key}`}>{row[column.key]}</TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

interface RowData {
  id: string;
  [key: string]: string | number | boolean;
}

interface DataTableProps {
  data: RowData[];
  columns: { key: string; label: string }[];
}

export function DataTable({ data, columns }: DataTableProps) {
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const toggleRow = (id: string) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedRows(prev =>
      prev.length === data.length ? [] : data.map(row => row.id)
    )
  }

  const exportCSV = () => {
    const selectedData = data.filter(row => selectedRows.includes(row.id))
    const csv = [
      columns.map(col => col.label).join(','),
      ...selectedData.map(row => columns.map(col => row[col.key] ?? "").join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute("href", url)
      link.setAttribute("download", "export.csv")
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div>
      <Button onClick={exportCSV} disabled={selectedRows.length === 0} className="mb-4">
        Export Selected to CSV
      </Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <Checkbox
                checked={selectedRows.length === data.length}
                onCheckedChange={() => toggleAll()}
              />
            </TableHead>
            {columns.map(column => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(row.id)}
                  onCheckedChange={(checked) => checked && toggleRow(row.id)}
                />
              </TableCell>
              {columns.map(column => (
                <TableCell key={`${row.id}-${column.key}`}>
                  {row[column.key]?.toString()}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
