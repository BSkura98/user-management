import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useDeleteUserMutation } from "../../hooks/useDeleteUserMutation";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface Props {
  userId: number | null;
  onClose: () => void;
}

export default function DeleteUserDialog({ userId, onClose }: Props) {
  const deleteUserMutation = useDeleteUserMutation();

  useEffect(() => {
    if (deleteUserMutation.isSuccess) {
      toast.success("Użytkownik został pomyślnie usunięty");

      onClose();
    }
  }, [deleteUserMutation.isSuccess]);

  const deleteUser = () => {
    deleteUserMutation.mutate(userId!);
  };

  return (
    <Dialog
      open={userId !== null}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Usuń użytkownika</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Czy na pewno chcesz usunąć tego użytkownika?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Nie</Button>
        <Button onClick={deleteUser} disabled={deleteUserMutation.isPending}>
          Tak
        </Button>
      </DialogActions>
    </Dialog>
  );
}
