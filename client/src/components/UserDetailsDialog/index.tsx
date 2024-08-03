import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import dayjs from "dayjs";

import { useGetUserQuery } from "../../hooks/useGetUserQuery";
import { StyledDialog } from "./styled";

interface Props {
  userId: number;
  onClose: () => void;
}

export default function UserDetailsDialog({ userId, onClose }: Props) {
  const { data, isLoading } = useGetUserQuery(userId);

  const displayUserInformation = () => {
    return (
      <>
        <b>Id</b>
        <p>{data?.id}</p>
        <b>Imię</b>
        <p>{data?.firstName}</p>
        <b>Nazwisko</b>
        <p>{data?.lastName || "-"}</p>
        <b>Kontynent</b>
        <p>{data?.continent || "-"}</p>
        <b>Data urodzenia</b>
        <p>
          {data?.birthdate ? dayjs(data?.birthdate).format("DD/MM/YYYY") : "-"}
        </p>
        <b>Data utworzenia użytkownika</b>
        <p>{dayjs(data?.createdAt).format("DD/MM/YYYY HH:mm:ss")}</p>
      </>
    );
  };

  return (
    <StyledDialog
      open={userId !== null}
      onClose={onClose}
      aria-labelledby="user-details-dialog-title"
      aria-describedby="user-details-dialog-description"
    >
      <DialogTitle id="user-details-dialog-title">Dane użytkownika</DialogTitle>
      <DialogContent>
        <DialogContentText id="user-details-dialog-description">
          {isLoading ? <p>Ładowanie...</p> : displayUserInformation()}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Zamknij</Button>
      </DialogActions>
    </StyledDialog>
  );
}
