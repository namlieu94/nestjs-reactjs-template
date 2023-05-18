import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const Notification = (props) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
    </Stack>
  );
};

export default Notification;
