import React, { useState } from 'react'
// import { AddUserDetails } from '../Api/api'
import '../App.css'
import { Link } from 'react-router-dom';
import { Grid, Paper, Button, Typography, Container, Box, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
const useStyles = makeStyles((theme) => ({
    root: {

        margin: theme.spacing(1),
        width: "100vw",
        height: '100vh',
        backgroundColor: theme.palette.grey[300],
        paddingTop: theme.spacing(5),

    },
    gridcss: {
        marginBottam: theme.spacing(1),
        marginRight: theme.spacing(15),
        marginTop: theme.spacing(2)
    },
    btncss:
    {
        marginTop: theme.spacing(2)
    }
}));
function Registration() {

    const details = { firstName: "", lastName: "", email: "", phone: "" }
    const [users, setusers] = useState([details])
    const userDetails = () => {
        setusers([...users, details])
    }
    const removeuserdetails = (index) => {
        const filteruser = [...users]
        filteruser.splice(index, 1)
        setusers(filteruser)
    }
    const changeHandler = (e, index) => {
        const updateuser = users.map((user, i) =>
            index == i ? Object.assign(user, { [e.target.name]: e.target.value }) : user
        );
        setusers(updateuser)
    }
    const classes = useStyles();
    return (
        <Container >
            <Paper component={Box} p={4}>
                <AppBar position="static"  style={{ borderRadius: 10}} color='primary'>
                    <Toolbar>
                        <Typography variant="h4" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            Dynamic Form
                        </Typography>
                    </Toolbar>
                </AppBar>
                {users.map((item, index) => (
                    <Grid container spacing={3} key={index} className={classes.gridcss}>
                        <Grid item md={3}>
                            <TextField
                                label='firstName'
                                placeholder='Enter your firstname'
                                variant='outlined'
                                name='firstName'
                                onChange={(e) => changeHandler(e, index)}
                                value={item.firstName}
                                fullWidth>
                            </TextField>
                        </Grid>
                        <Grid item md={2}>
                            <TextField
                                label='lastName'
                                placeholder='Enter your lastname'
                                variant='outlined'
                                name='lastName'
                                onChange={(e) => changeHandler(e, index)}
                                value={item.lastName}
                                fullWidth>
                            </TextField>
                        </Grid>
                        <Grid item md={3}>
                            <TextField
                                label='email'
                                placeholder='Enter your email'
                                variant='outlined'
                                name='email'
                                onChange={(e) => changeHandler(e, index)}
                                value={item.email}
                                fullWidth>
                            </TextField>
                        </Grid>
                        <Grid item md={3}>
                            <TextField
                                label='phone'
                                placeholder='Enter your Number'
                                variant='outlined'
                                name='phone'
                                onChange={(e) => changeHandler(e, index)}
                                value={item.phone}
                                fullWidth>
                            </TextField>
                        </Grid>

                        {users.length >= 2 ?
                            <Grid item md={1}><IconButton onClick={() => removeuserdetails(index)}><i class="fas fa-trash"></i></IconButton></Grid> : ""}
                    </Grid>
                ))}
                <Button variant="contained" className={classes.btncss} color='primary' onClick={userDetails} >ADD more</Button>
            </Paper>

            <Link to='/'><Button className={classes.btncss} variant="contained" color='secondary'>Go to Home</Button></Link>
        </Container>
    )
}
export default Registration
