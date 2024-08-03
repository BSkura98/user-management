import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  firstName: string,
  lastName: string,
  continent: string | null,
  birthdate: string
) {
  return {
    firstName,
    lastName,
    continent,
    birthdate,
  };
}

const rows = [
  createData("Jan", "Kowalski", "Europa", "1998-05-14"),
  createData("John", "Smith", "Ameryka Południowa", "1963-08-24"),
  createData("Anna", "Nowak", null, "1970-07-01"),
  createData("Monica", "Wood", "Azja", "1980-12-12"),
  createData("Taylor", "Brown", "Afryka", "1949-05-09"),
];

export default function UsersTable() {
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
          {rows.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName ?? "-"}</TableCell>
              <TableCell>{row.continent ?? "-"}</TableCell>
              <TableCell>{row.birthdate ?? "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
