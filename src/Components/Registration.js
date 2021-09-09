import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Button,
  Typography,
  Container,
  Box,
  makeStyles,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
  gridcss: {
    marginBottam: theme.spacing(1),
    marginRight: theme.spacing(15),
    marginTop: theme.spacing(2),
  },
  btncss: {
    marginTop: theme.spacing(2),
  },
  field: {
    margin: theme.spacing(1),
  },
  group: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

function Registration() {
  const form = [
    { id: "fristname-1", firstName: "" },
    { id: "lastname-1", lastName: "" },
    { id: "email-1", email: "" },
  ];
  const [users, setUsers] = useState([form]);
  const [generalForm, setGeneralForm] = useState([
    { id: "firstname-2", firstName: "" },
    { id: "lastname-2", lastName: "" },
    { id: "email-2", email: "" },
    { id: "phone-2", phone: "" },
  ]);

  //   const userDetails = () => {
  //     setusers([...users, details]);
  //   };
    const changeHandler = (e, index) => {
      const updateuser = users.map((user, i) =>
        index === i
          ? Object.assign(user, { [e.target.name]: e.target.value })
          : user
      );
      setUsers(updateuser);
    };

  const addUser = () => {
    let arr = [...users, form];
    setUsers(arr);
  };

  const removeUser = (index) => {
    let arr = [...users];
    arr.splice(index, 1);
    setUsers(arr);
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    return destClone;
  };

  function onDragEnd(result) {
    let items = [];
    const { source, destination } = result;
    // dropped outside the list
    if (!destination || source.droppableId !== "droppable") {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      items = reorder(
        generalForm,
        result.source.index,
        result.destination.index
      );
      setGeneralForm(items);
    } else {
      let userIndex = parseInt(
        destination.droppableId.replace("droppable-", "")
      );
      let usersClone = Array.from(users);
      let user = usersClone[userIndex];
      result = move(generalForm, user, source, destination);
      usersClone.splice(userIndex, 1);

      usersClone.splice(userIndex, 0, result);
      setUsers(usersClone);
    }
  }

  const classes = useStyles();
  return (
    <Container>
      <Paper component={Box} p={4}>
        <AppBar position="static" style={{ borderRadius: 10 }} color="primary">
          <Toolbar>
            <Typography
              variant="h4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              Dynamic Form
            </Typography>
          </Toolbar>
        </AppBar>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Box>
              {users.map((item, i) => (
                <Droppable droppableId={`droppable-${i}`}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={classes.group}
                    >
                      {item.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <span
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TextField
                                label={item.id}
                                // placeholder={`Enter your ${item.id}`}
                                variant="outlined"
                                name={item.id}
                                onChange={(e) => changeHandler(e, index)}
                                value={item.firstName}
                                className={classes.field}
                              ></TextField>
                            </span>
                          )}
                        </Draggable>
                      ))}
                      {i > 0 && (
                        <IconButton
                          style={{ color: "blue" }}
                          onClick={() => removeUser(i)}
                        >
                          <i class="fas fa-trash"></i>
                        </IconButton>
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </Box>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {generalForm.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TextField
                            label={item.id}
                            placeholder={`Enter your ${item.id}`}
                            variant="outlined"
                            name={item.id}
                            onChange={(e) => changeHandler(e, index)}
                            value={item.id}
                            fullWidth
                            style={{ padding: "5px 0" }}
                          ></TextField>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Box>
        <Button
          variant="contained"
          className={classes.btncss}
          color="primary"
          onClick={addUser}
        >
          ADD more
        </Button>
      </Paper>

      <Link style={{ textDecorationLine: "none" }} to="/">
        <Button
          className={classes.btncss}
          variant="contained"
          color="secondary"
        >
          Go to Home
        </Button>
      </Link>
    </Container>
  );
}
export default Registration;
