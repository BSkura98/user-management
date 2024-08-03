import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddUserModal from "./components/AddUserDialog";
import UsersTable from "./components/UsersTable";
import { PageContainer } from "./styled";

function App() {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
