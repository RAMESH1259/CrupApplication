import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";
// import Axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { AddUserDetails } from "../Api/api";

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  const [personDetails, setuserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const emptystate = () => {
    setuserDetails({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    })
  }

  const onchangehandler = (e) => {
    setuserDetails({
      ...personDetails,
      [e.target.name]: e.target.value,
    });
  };
  const onsubmithandler = async (e) => {
    e.preventDefault();
    if(!personDetails.length) {
      alert("please fill the all field")
    } 
    else{
    const Add = await AddUserDetails(personDetails);
    if (Add.status == 201) {
      props.getUserdetails()
      emptystate()
    }
    else {
      alert(Add.statusText || "Ntwork error")
    }
    handleClose()
  }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const btnStyle = { marginTop: 20, width: 200 }
  // const btnStyle1={background-color:red}

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        ADD Users
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <form type='submit' onChange={onchangehandler} onSubmit={onsubmithandler} className={classes.root} noValidate autoComplete="off">
            <TextField label='firstName' value={personDetails.firstName} name='firstName' id="standard-basic" />
            <TextField label='lastName' value={personDetails.lastName} name='lastName' id="standard-basic" />
            <TextField label='email' value={personDetails.email} name='email' type='Email' id="standard-basic" />
            <TextField label='phone' value={personDetails.phone} name='phone' id="standard-basic" />
            <Button type='submit' style={btnStyle} variant='contained' color='primary' >Submit</Button>
            <Button style={btnStyle} variant='contained' color='secondary' onClick={handleClose} >Cancel</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
