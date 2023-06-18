import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MySnackBarContext({ alertData, setAlertData }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertData({ ...alertData, open: false });
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: alertData.vertical || "top",
        horizontal: alertData.horizontal || "right",
      }}
      open={alertData.open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={alertData.severity}
        sx={{ width: "100%" }}
      >
        {alertData.message}
      </Alert>
    </Snackbar>
  );
}
