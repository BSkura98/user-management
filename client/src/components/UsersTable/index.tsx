import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { Form } from "../../models/Form";
import { useGetUsersQuery } from "../../hooks/useGetUsersQuery";
import DeleteUserDialog from "../DeleteUserDialog";

export default function UsersTable() {
  const { data } = useGetUsersQuery();

  const [userToDelete, setUserToDelete] = useState<number | null>(null);

  return (
    <>
      <DeleteUserDialog
        userId={userToDelete}
        onClose={() => setUserToDelete(null)}
      />
      <TableContainer component={Paper}>
        <Table aria-label="users table">
          <TableHead>
            <TableRow>
              <TableCell width="22%">Imię</TableCell>
              <TableCell width="22%">Nazwisko</TableCell>
              <TableCell width="22%">Kontynent</TableCell>
              <TableCell width="22%">Data urodzenia</TableCell>
              <TableCell width="12%"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((user: Form) => (
              <TableRow
                key={user.firstName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell width="23%">{user.firstName}</TableCell>
                <TableCell width="23%">{user.lastName ?? "-"}</TableCell>
                <TableCell width="23%">{user.continent ?? "-"}</TableCell>
                <TableCell width="23%">
                  {user.birthdate
                    ? dayjs(user.birthdate).format("DD/MM/YYYY")
                    : "-"}
                </TableCell>
                <TableCell width="8%">
                  <IconButton
                    aria-label="delete"
                    onClick={() => setUserToDelete(user.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
