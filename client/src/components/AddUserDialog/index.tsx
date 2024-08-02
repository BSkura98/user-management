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
import { useGetContinentsQuery } from "../../hooks/useGetContinentsQuery";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddUserDialog({ open, onClose }: Props) {
  const { data } = useGetContinentsQuery();

  const [continent, setContinent] = useState<Continent | undefined>(undefined);

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
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
        />
        <TextField
          margin="dense"
          id="last-name"
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
