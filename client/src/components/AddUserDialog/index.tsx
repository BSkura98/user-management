import * as React from "react";
import { useContext, useEffect, useMemo, useState } from "react";
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
import dayjs, { Dayjs } from "dayjs";
import { plPL } from "@mui/x-date-pickers/locales";
import "dayjs/locale/pl";

import { StyledDialog } from "./styled";
import { useGetContinentsQuery } from "../../hooks/useGetContinentsQuery";
import { useCreateUserMutation } from "../../hooks/useCreateUserMutation";
import { UserBirthdateContext, UserBirthdateContextType } from "../../App";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddUserDialog({ open, onClose }: Props) {
  const { setUserBirthdate } = useContext(
    UserBirthdateContext
  ) as UserBirthdateContextType;

  const { data } = useGetContinentsQuery();
  const createUserMutation = useCreateUserMutation();

  const [continent, setContinent] = useState<string | undefined>(undefined);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthdate, setBirthdate] = useState<Dayjs | null>(null);

  const isBirthdateInFuture = useMemo(
    () => dayjs(birthdate).isAfter(dayjs()),
    [birthdate]
  );

  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");

  useEffect(() => {
    if (createUserMutation.isSuccess) {
      toast.success("Użytkownik został pomyślnie dodany");

      handleClose();
    }
    // eslint-disable-next-line
  }, [createUserMutation.isSuccess]);

  useEffect(() => {
    if (createUserMutation.isError) {
      toast.error("Nastąpił problem podczas dodawania użytkownika");
    }
    // eslint-disable-next-line
  }, [createUserMutation.isError]);

  const isDataValid = () => {
    if (firstName.length === 0) {
      setFirstNameError("To pole jest wymagane");
      return false;
    }
    if (continent === "Europa" && (!lastName || lastName.length < 2)) {
      setLastNameError("Nie spełnione kryteria");
      return false;
    }

    return true;
  };

  const handleClose = () => {
    setContinent(undefined);
    setFirstName("");
    setLastName("");
    setBirthdate(null);
    onClose();
  };

  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          if (isDataValid()) {
            if (birthdate) {
              localStorage.setItem("birthdate", birthdate.format("YYYY-MM-DD"));
            }

            createUserMutation.mutate({
              continent,
              firstName,
              lastName,
              birthdate: birthdate?.format("YYYY-MM-DD"),
            });
          }
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
            {data?.map((continent: string) => (
              <MenuItem value={continent} key={continent}>
                {continent}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          id="name"
          name="first-name"
          label="Imię"
          type="text"
          fullWidth
          variant="outlined"
          value={firstName}
          onChange={(e) => {
            setFirstNameError("");
            setFirstName(e.target.value);
          }}
          error={Boolean(firstNameError)}
          helperText={firstNameError}
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
          onChange={(e) => {
            setLastNameError("");
            setLastName(e.target.value);
          }}
          error={Boolean(lastNameError)}
          helperText={lastNameError}
        />
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="pl"
          localeText={
            plPL.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Data urodzenia"
              value={birthdate}
              onChange={(value) => {
                setBirthdate(value);
                if (value) {
                  setUserBirthdate(value.format("YYYY-MM-DD"));
                }
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setUserBirthdate(localStorage.getItem("birthdate"));
            handleClose();
          }}
        >
          Zamknij
        </Button>
        <Button type="submit" disabled={isBirthdateInFuture}>
          Wyślij
        </Button>
      </DialogActions>
    </StyledDialog>
  );
}
