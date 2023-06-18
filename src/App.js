import React, { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AlertContext } from "./context/AlertContext";
import MySnackBarContext from "./components/MySnackBar";

import MainRoutes from "./routes";

function App() {
  const [alertData, setAlertData] = useState({
    open: false,
    severity: "",
    message: "",
  });
  return (
    <AlertContext.Provider value={{ alertData, setAlertData }}>
      <MainRoutes />

      <MySnackBarContext alertData={alertData} setAlertData={setAlertData} />
    </AlertContext.Provider>
  );
}

export default App;
