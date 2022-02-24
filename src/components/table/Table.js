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
        <table {...getTableProps()} className="min-w-full border-collapse border-0 "  >
            <thead className='' >
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} className="border-b border-b-secondary-150 ">
                            {
                                headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps()}  className="text-sm md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2" >
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
                            <tr {...row.getRowProps()} className="h-16 text-right border-b border-b-secondary-150" >
                                {
                                    row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}  className='text-secondary-300 font-sans text-xs text-center md:text-sm md:font-sans '  > {cell.render("Cell")}</td>
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