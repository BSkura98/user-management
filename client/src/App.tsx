import { createContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material";

import AddUserModal from "./components/AddUserDialog";
import UsersTable from "./components/UsersTable";
import { PageContainer } from "./styled";
import createTheme from "./theme/theme";

export type UserBirthdateContextType = {
  userBirthdate: string | null;
  setUserBirthdate: React.Dispatch<React.SetStateAction<string | null>>;
};

export const UserBirthdateContext =
  createContext<UserBirthdateContextType | null>(null);

function App() {
  const [userBirthdate, setUserBirthdate] = useState<string | null>(null);
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setUserBirthdate(localStorage.getItem("birthdate"));
  }, []);

  return (
    <div className="App">
      <UserBirthdateContext.Provider
        value={{ userBirthdate, setUserBirthdate }}
      >
        <ThemeProvider theme={createTheme(userBirthdate)}>
          <ToastContainer
            position="top-center"
            hideProgressBar
            style={{ width: "30rem" }}
          />
          <AddUserModal open={open} onClose={handleClose} />
          <PageContainer>
            <Stack spacing={2} direction="row" justifyContent="space-between">
              <Typography variant="h6" gutterBottom>
                Użytkownicy
              </Typography>
              <Button variant="contained" onClick={handleClickOpen}>
                Dodaj
              </Button>
            </Stack>
            <UsersTable />
          </PageContainer>
        </ThemeProvider>
      </UserBirthdateContext.Provider>
    </div>
  );
}

export default App;
