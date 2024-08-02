import { useState } from "react";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddUserModal from "./components/AddUserDialog";

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
      <ToastContainer position="top-center" hideProgressBar />
      <AddUserModal open={open} onClose={handleClose} />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
    </div>
  );
}

export default App;
