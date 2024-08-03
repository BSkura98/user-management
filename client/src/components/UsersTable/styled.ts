import { Typography } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";

export const StyledTableRow = styled(TableRow)`
  .MuiTableCell-root {
    cursor: pointer;
  }
`;

export const TableInformation = styled(Typography)`
  && {
    width: 10rem;
    margin: 1rem;
  }
`;
