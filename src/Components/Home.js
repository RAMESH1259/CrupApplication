import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CustomizedDialogs from "../Modal/dailogs";
import EditModal from "../Modal/EditModal";
import { loadUserDetails, deleteDetails } from "../Api/api";
import Axios from "axios";
function Home(props) {
  const [person, setperson] = useState([]);
  const [open, setOpen] = React.useState(false);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  useEffect(() => {
    getUserdetails();
  }, []);

  const getUserdetails = async () => {
    let result = await loadUserDetails();
    setperson(result);
  };

  const deleteUserDetails = async (userId) => {
    let result = await deleteDetails(userId);
    console.log(result.response);
    if (result.status == "200") {
      getUserdetails();
    } else {
      alert((result && result.response.statusText) || "network Error");
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  const [userDetails, setuserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const onsubmithandler = async (id) => {
    // console.log("kjsksjk")
    const result = await Axios.get(`http://localhost:3002/posts/${id}`);
    setuserDetails(result.data);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              CRUD-APP
            </Typography>
            <CustomizedDialogs />
            {/* <Button color="secondary" variant="contained"></Button>  */}
          </Toolbar>
        </AppBar>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.NO</TableCell>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {person.length &&
              person.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    <i
                      class="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => deleteUserDetails(row.id)}
                    ></i>
                    {""}--{""}{" "}
                    <i
                      class="fa fa-pencil-square"
                      aria-hidden="true"
                      onClick={() => onsubmithandler(row.id)}
                    ></i>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {userDetails.firstName?
        <EditModal userDetails={userDetails}
        />:""}
      </TableContainer>
    </>
  );
}

export default Home;
