import * as React from "react";
import { useState } from "react";
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

import { Continent } from "./continents";
import { StyledDialog } from "./styled";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddUserDialog({ open, onClose }: Props) {
  const [continent, setContinent] = useState<Continent | undefined>(undefined);

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const email = formJson.email;
          console.log(email);
          onClose();
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
              setContinent(event.target.value as Continent);
            }}
          >
            <MenuItem value={undefined}>-</MenuItem>
            {Object.entries(Continent).map(([key, value]) => (
              <MenuItem value={key}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="first-name"
          label="Imię"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="last-name"
          label="Nazwisko"
          type="text"
          fullWidth
          variant="outlined"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Data urodzenia" />
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
