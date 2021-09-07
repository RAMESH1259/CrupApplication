import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ADDMODAL from "../Modal/dailogs";
import EditModal from "../Modal/EditModal";
import { loadUserDetails, deleteDetails, updateDetails } from "../Api/api";
import ConfirmModal from "../Modal/confirmModal";
import  {Link}  from 'react-router-dom';
import { Button } from "@material-ui/core";

function Home() {
  const [person, setperson] = useState([]);

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

  const EditFormHandler = async (personDetails) => {
    // e.preventDefault();
    const status = await updateDetails(personDetails)
    if (status.status == 201) {
      alert(status.statusText);
    } else {
      alert(status.statusText || "Network Error");
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
  return (
    <>
    <Link to='/Registration'><Button type="button" variant='contained' color='primary' style={{marginBottom:10}}>Registration</Button></Link>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              CRUD-APP
            </Typography>
            <ADDMODAL getUserdetails={getUserdetails} />
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
                  <TableCell component="th" scope="row" className="custom">
                    <ConfirmModal
                      id={row.id}
                      deleteDetails={deleteUserDetails}
                    />
                    <EditModal
                      userDetails={row}
                      getUserdetails={getUserdetails}
                      onsubmithandler={EditFormHandler}
                    ></EditModal>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default Home;
