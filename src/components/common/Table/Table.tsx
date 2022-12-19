import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableProps,
  TableRow,
  Typography,
  Stack,
  TypographyProps,
} from "@mui/material";
import { FC, useMemo } from "react";

import { Column, useTable } from "react-table";
import { GeneralChip } from "../GeneralChip";
import { TableStatus } from "./Table-status.model";

const TableTypography: FC<TypographyProps> = ({ children }) => (
  <Typography variant="body2" sx={{ color: "grey.500" }}>
    {children}
  </Typography>
);

interface ITableType {
  name: string;
  email: string;
  date: string;
  salary: string;
  age: string;
  status: string;
  role: string;
}

export const CommonTable: FC<TableProps> = ({ sx, ...props }) => {
  const rowData = [
    {
      name: "Ridvan",
      email: "rdvndmrc@gmail.com",
      date: "09/07/2021",
      salary: "$123,123",
      age: "27",
      status: "current",
      role: "Manager",
    },
    {
      name: "Furkan",
      email: "frkndmrc@gmail.com",
      date: "13/13/2003",
      salary: "$123,123",
      age: "27",
      status: "professional",
      role: "Human Resource",
    },
    {
      name: "Seyma",
      email: "seyma.oruc@gmail.com",
      date: "20/09/1997",
      salary: "$123,123",
      age: "27",
      status: "rejected",
      role: "Teacher",
    },
    {
      name: "Asiye",
      email: "asi@gmail.com",
      date: "13/13/2003",
      salary: "$123,123",
      age: "27",
      status: "resigned",
      role: "Mother",
    },
    {
      name: "Halil",
      email: "halldmrc@gmail.com",
      date: "13/13/2003",
      salary: "$123,123",
      age: "27",
      status: "applied",
      role: "Father",
    },
  ];
  const tableColumns: Column<ITableType>[] = useMemo(
    () => [
      {
        accessor: "name",
        Header: "NAME",
        Cell: ({ value, row }) => {
          return (
            <Stack>
              <Typography variant="body2">{value}</Typography>
              <Typography variant="caption" sx={{ color: "grey.500" }}>
                {row.original.role}
              </Typography>
            </Stack>
          );
        },
      },
      {
        accessor: "email",
        Header: "EMAIL",
        Cell: ({ value }) => <TableTypography>{value}</TableTypography>,
      },
      {
        accessor: "age",
        Header: "AGE",
        Cell: ({ value }) => <TableTypography>{value}</TableTypography>,
      },
      {
        accessor: "date",
        Header: "DATE",
        Cell: ({ value }) => <TableTypography>{value}</TableTypography>,
      },
      {
        accessor: "salary",
        Header: "SALARY",
        Cell: ({ value }) => <TableTypography>{value}</TableTypography>,
      },
      {
        accessor: "status",
        Header: "STATUS",
        Cell: ({ value }) => (
          <GeneralChip type={value as TableStatus} label={value} />
        ),
      },
    ],
    []
  );
  const { headerGroups, rows, prepareRow } = useTable({
    columns: tableColumns,
    data: rowData,
  });

  return (
    <Table sx={sx} {...props}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell {...column.getHeaderProps()}>
                {column.render("Header")}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
