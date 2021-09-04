import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useState } from "react";
import Axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Customized(props) {
  const [open, setOpen] = useState(false);
  const [personDetails, setuserDetails] = useState({
    firstName: props.userDetails.firstName,
    lastName: props.userDetails.lastName,
    email: props.userDetails.email,
    phone: props.userDetails.phone,
    id: props.userDetails.id,
  });


  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const onchangehandler = (e) => {
    setuserDetails({
      ...personDetails,
      [e.target.name]: e.target.value,
    });
  };
  const onsubmithandler = async (e) => {
    e.preventDefault();
    const status = await Axios.put(
      `http://localhost:3002/posts/${personDetails.id}`,
      personDetails
    );
    if (status.status == 201) {
      alert(status.statusText);
    } else {
      alert(status.statusText || "Network Error");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const btnStyle = { marginTop: 20, width: 200 };
  const classes = useStyles();
  return (
    <div>
      <Button>
        <i
          class="fa fa-pencil-square"
          aria-hidden="true"
          onClick={() => handleClickOpen()}
        ></i>
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent>
          <form
            onChange={onchangehandler}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="FirstName"
              value={personDetails.firstName}
              name="firstName"
              id="standard-basic"
            />
            <TextField
              label="LastName"
              value={personDetails.lastName}
              name="lastName"
              id="standard-basic"
            />
            <TextField
              label="Email"
              value={personDetails.email}
              name="email"
              type="Email"
              id="standard-basic"
            />
            <TextField
              label="Phone"
              value={personDetails.phone}
              name="phone"
              id="standard-basic"
            />
            <Button
              type="submit"
              style={btnStyle}
              variant="contained"
              color="secondary"
              onClick={(e) => [handleClose(), onsubmithandler(e)]}
            >
              Submit
            </Button>
            <Button
              type="submit"
              style={btnStyle}
              variant="contained"
              color="secondary"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
