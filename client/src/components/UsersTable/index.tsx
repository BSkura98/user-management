import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";

import { Form } from "../../models/Form";
import { useGetUsersQuery } from "../../hooks/useGetUsersQuery";

export default function UsersTable() {
  const { data } = useGetUsersQuery();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="users table">
        <TableHead>
          <TableRow>
            <TableCell>Imię</TableCell>
            <TableCell>Nazwisko</TableCell>
            <TableCell>Kontynent</TableCell>
            <TableCell>Data urodzenia</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data.map((row: Form) => (
            <TableRow
              key={row.firstName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName ?? "-"}</TableCell>
              <TableCell>{row.continent ?? "-"}</TableCell>
              <TableCell>
                {row.birthdate
                  ? dayjs(row.birthdate).format("DD/MM/YYYY")
                  : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
