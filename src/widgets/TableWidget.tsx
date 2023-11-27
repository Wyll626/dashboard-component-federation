// TableWidget.tsx
import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type Column = {
  accessor: string | ((row: any) => any);
  id?: string;
  header?: React.ReactNode | ((info: any) => React.ReactNode);
  cell?: (info: any) => React.ReactNode;
  footer?: React.ReactNode | ((info: any) => React.ReactNode);
};

interface TableWidgetProps {
  columns: Column[];
  data: any[]; // You can use any[] for the data type if it can be any shape
}

function TableWidget({ columns, data }: TableWidgetProps) {
  const columnHelper = createColumnHelper<any>(); // Use any for column data type

  const table = useReactTable({
    data,
    columns: columns.map((column) => {
      return columnHelper.accessor(column.accessor, {
        ...column,
        header: typeof column.header === 'function' ? column.header : () => column.header,
        cell: typeof column.cell === 'function' ? column.cell : (info: any) => info.renderValue(),
        footer: typeof column.footer === 'function' ? column.footer : () => column.footer,
      });
    }),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup: any) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row: any) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell: any) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup: any) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header: any) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}

export default TableWidget;
