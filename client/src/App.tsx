import { useState } from "react";
import Button from "@mui/material/Button";

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
      <AddUserModal open={open} onClose={handleClose} />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
    </div>
  );
}

export default App;
