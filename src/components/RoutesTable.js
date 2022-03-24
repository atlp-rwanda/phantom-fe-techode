import React, { useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { usePagination, useTable } from "react-table";
import { toast } from "react-toastify";

const routes = [
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
  {
    id: 1,
    name: "kn",
    code: 1200,
    startLocation: "kabeza",
    endLocation: "Kicukiro",
    distance: "km5",
    duration: "min30",
  },
];
export default function RoutesTable(props) {
  const [tabledata, settabledata] = useState(routes);
  console.log(routes);
  const tableColumns = [
    { Header: "ID", accessor: "id" },
    { Header: "Name", accessor: "name" },
    { Header: "Code", accessor: "code" },
    { Header: "Start location", accessor: "startLocation" },
    { Header: "End location", accessor: "endLocation" },
    { Header: "Distance", accessor: "distance" },
    { Header: "Duration", accessor: "duration" },
    { Header: "Action", accessor: "action" },
  ];

  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => tabledata, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    previousPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
  } = useTable({ columns, data }, usePagination);
  const { pageIndex, pageSize } = state;
  const newRoute = {
    id: 1,
    name: "n",
    code: 1200,
    startLocation: "new Route",
    endLocation: "new desto",
    distance: "km5",
    duration: "min30",
  };
  const formRef = useRef();
  const handleCreate = (e) => {
    e.preventDefault();
    console.log(tabledata);
    const name = e.target.name.value;
    newRoute["name"] = name;
    const newdata = tabledata.slice().push(newRoute);
    settabledata(newdata);
    if (formRef.current) {
      formRef.current.reset();
    }
    console.log(tabledata);
    toast("A new route has been added");
  };

  return (
    <div>
      <table {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              {canPreviousPage ? (
                <button onClick={() => previousPage()}>Prev</button>
              ) : (
                ""
              )}
            </td>
            <td>
              {canNextPage ? (
                <button onClick={() => nextPage()}>Next</button>
              ) : (
                ""
              )}
            </td>
            <td>
              <span>Page </span>
              <b>{pageIndex + 1}</b> of <span>{pageCount}</span>
            </td>
          </tr>
        </tfoot>
      </table>

      <div>
        <form
          action="#none"
          onSubmit={handleCreate}
          className="my-4 mx-auto shadow-lg"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Route anme"
            className="block m-2 border bg-gray-400 text-black"
          />
          <button
            type="submit"
            className="bg-blue-400 py-1 px-3 text-white font-bold block"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
