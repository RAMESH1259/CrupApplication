import React from "react";
import { useState } from "react";
import Axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other} = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <i class="fas fa-times"></i>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Customized(props) {
  const [open, setOpen] = React.useState(true);
  const [personDetails, setuserDetails] = useState({
    firstName: props.userDetails.firstName,
    lastName: props.userDetails.lastName,
    email: props.userDetails.email,
    phone: props.userDetails.phone,
    id:props.userDetails.id
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const onchangehandler = (e) => {
    setuserDetails({
      ...personDetails,
      [e.target.name]: e.target.value
    });

  };
  const onsubmithandler = async (e) => {
    e.preventDefault();
    const Add = await Axios.put(`http://localhost:3002/posts/${personDetails.id}`, personDetails);
    // History.push('/');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        edit
      </Button> */}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit here
        </DialogTitle> */}
        <DialogContent >
          <div className="userscontainer">
            <form className="form" onSubmit={onsubmithandler}>
              <div className="usersformwrapper" onChange={onchangehandler}>
                <div className="usersformbox">
                  <label className="label">FirstName</label>
                  <div className="inputtype">
                    <input
                      type="text"
                      // onChange={onchangehandler}
                      value={personDetails.firstName}
                      name="firstName"
                    />
                  </div>
                </div>
                <div className="usersformbox">
                  <label className="label">Username</label>
                  <div className="inputtype">
                    <input
                      type="text"
                      // onChange={onchangehandler}
                      value={personDetails.lastName}
                      name="lastName"
                    />
                  </div>
                </div>
                <div className="usersformbox" >
                  <label className="label">Email</label>
                  <div className="inputtype">
                    <input
                      type="email"
                      value={personDetails.email}
                      name="email"
                    />
                  </div>
                </div>
                <div className="usersformbox">
                  <label className="label">PhoneNumber</label>
                  <div className="inputtype">
                    <input
                      type="text"
                      // onChange={onchangehandler}
                      value={personDetails.phone}
                      name="phone"
                    />
                  </div>
                  <div className="usersformbox" id="btn5">
                    <button className="btn4" type="data" onClick={handleClose}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
