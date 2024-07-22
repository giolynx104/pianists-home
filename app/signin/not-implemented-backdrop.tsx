import { Alert, Backdrop } from "@mui/material";
import { MouseEventHandler } from "react";

const NotImplementedBackdrop = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: MouseEventHandler;
}) => {
  return <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
    onClick={handleClose}
  >
    <Alert onClose={() => {}} variant="filled" severity="error">
      Function hasn&apos;t been implemented yet, please come back later
    </Alert>
  </Backdrop>;
};

export default NotImplementedBackdrop;
