import React, { useMemo } from 'react'
import { useTable } from 'react-table'

export  const TempTable = ({  columns , datas}) => {
   
    const cols = useMemo(() => columns , []);
    const data = useMemo(() => datas , []);  

    const tableInstance = useTable({  columns , data:datas });
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;
    return (
        <table {...getTableProps()} >
            <thead className='' >
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} className="border-b border-b-secondary-100 ">
                            {
                                headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps()}  >
                                        {column.render("Header")}
                                    </th>
                                ))
                            }
                        </tr> 
                    ))
                }
                                     
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map( row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}  >
                                {
                                    row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}  > {cell.render("Cell")}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}