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
import UserDetailsDialog from "../UserDetailsDialog";
import { StyledTableRow } from "./styled";

export default function UsersTable() {
  const { data } = useGetUsersQuery();

  const [userToDeleteId, setUserToDeleteId] = useState<number | null>(null);
  const [userDetailsId, setUserDetailsId] = useState<number | null>(null);

  return (
    <>
      <DeleteUserDialog
        userId={userToDeleteId}
        onClose={() => setUserToDeleteId(null)}
      />
      {userDetailsId && (
        <UserDetailsDialog
          userId={userDetailsId}
          onClose={() => setUserDetailsId(null)}
        />
      )}
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
              <StyledTableRow
                key={user.firstName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => setUserDetailsId(user.id)}
                hover
              >
                <TableCell width="23%">{user.firstName}</TableCell>
                <TableCell width="23%">{user.lastName || "-"}</TableCell>
                <TableCell width="23%">{user.continent || "-"}</TableCell>
                <TableCell width="23%">
                  {user.birthdate
                    ? dayjs(user.birthdate).format("DD/MM/YYYY")
                    : "-"}
                </TableCell>
                <TableCell width="8%">
                  <IconButton
                    aria-label="delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      setUserToDeleteId(user.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
