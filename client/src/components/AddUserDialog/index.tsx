import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { toast } from "react-toastify";

import { StyledDialog } from "./styled";
import { useGetContinentsQuery } from "../../hooks/useGetContinentsQuery";
import { useCreateUserMutation } from "../../hooks/useCreateUserMutation";
import { Dayjs } from "dayjs";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddUserDialog({ open, onClose }: Props) {
  const { data } = useGetContinentsQuery();
  const createUserMutation = useCreateUserMutation();

  const [continent, setContinent] = useState<string | undefined>(undefined);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthdate, setBirthdate] = useState<Dayjs | null>(null);

  useEffect(() => {
    if (createUserMutation.isSuccess) {
      toast.success("User successfully added!");

      onClose();
    }
  }, [createUserMutation.isSuccess]);

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          createUserMutation.mutate({
            continent,
            firstName,
            lastName,
            birthdate: birthdate?.format("YYYY-MM-DD"),
          });
        },
      }}
    >
      <DialogTitle>Dodaj użytkownika</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="dense">
          <InputLabel id="continent-label">Kontynent</InputLabel>
          <Select
            labelId="continent-label"
            id="continent"
            value={continent as string}
            label="Kontynent"
            onChange={(event: SelectChangeEvent) => {
              setContinent(event.target.value);
            }}
          >
            <MenuItem value={undefined}>-</MenuItem>
            {data?.data?.map((continent: string) => (
              <MenuItem value={continent} key={continent}>
                {continent}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          required
          margin="dense"
          id="name"
          name="first-name"
          label="Imię"
          type="text"
          fullWidth
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="last-name"
          name="last-name"
          label="Nazwisko"
          type="text"
          fullWidth
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Data urodzenia"
              value={birthdate}
              onChange={(value) => setBirthdate(value)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Zamknij</Button>
        <Button type="submit">Zapisz</Button>
      </DialogActions>
    </StyledDialog>
  );
}
