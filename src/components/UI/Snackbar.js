import * as React from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar({ severity, open, onClose, message }) {
  return (
    <Stack>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => onClose(false)}
      >
        <NotificationAlert onClose={() => onClose(false)} severity={severity}>
          <h1>{message}</h1>
        </NotificationAlert>
      </Snackbar>
    </Stack>
  );
}
const NotificationAlert = styled(Alert)`
  width: 700px;
  padding: 40px;
  height: 70px;
  background-color: red;
  & h1 {
    font-family: "Inter";
    font-style: normal;
    font-size: 25px;
    line-height: 19px;
    color: #000000;
  }
`;
