import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
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
  const { firstName, lastName, email, phone, id } = props.userDetails
  const [personDetails, setuserDetails] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    id: id,
  });

  const onchangehandler = (e) => {
    setuserDetails({
      ...personDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const btnStyle = { marginTop: 20, width: 200, spacing: 10 };
  return (
    <div>
      <Button color="primary" onClick={() => handleClickOpen()}>
        <i class="fa fa-pencil-square" aria-hidden="true"></i>
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        // aria-describedby="alert-dialog-description"
        open={open}
        onChange={onchangehandler}
      >
        <DialogContent dividers>
          <form className={classes.root} noValidate autoComplete="off">
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
              color="primary"
              onClick={(e) => [
                handleClose(),
                props.onsubmithandler(personDetails),
              ]}
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
