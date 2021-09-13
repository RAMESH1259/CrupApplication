import React, { useContext } from 'react'
import { TextField, Button, Select,InputLabel } from '@material-ui/core'
import { MyContext } from '../Stepcontext'
import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';

function Form3() {
    const { Currentvalue, setStep, setformdata, formdata } = useContext(MyContext);
    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }

    //const Submithandler = (e) => {
    //e.preventDefault();
    //setStep(4)
    // console.log(Currentvalue)
    // setFinaldata(Finaldata=>[...Finaldata,formdata])   
    // History.push('/Displaydata')
    // }

    return (
        <div>
            <h3>Third Form</h3>

            <div onChange={handlechange}>
                <div className="form-1">
                    {/* <TextField variant='outlined' name='gender' label='gender' value={formdata["gender"]} /> */}
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        value={formdata["gender"]}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="gender"
                        variant='outlined'
                        style={{ width: "380px" }}
                        onChange={handlechange}
                    >
                        {/* <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option> */}
                        <MenuItem value="">Select Gender</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Transgender">Transgender</MenuItem>
                    </Select>
                </div><br />
                <div className="form-1">
                    <TextField variant='outlined' name='city' label='city' value={formdata["city"]} />
                </div><br />
                <div className="form-1">
                    <TextField
                        // style={{ width: "1200px" }}
                        // label='Enter your DOB'
                        placeholder="DOB"
                        variant='outlined'
                        type='date'
                        size='small'
                        name='dob'
                        value={formdata["dob"]}
                        style={{ width: "384px", height: "30px" }}
                    />
                </div>
            </div><br />
            <span>
                <Button onClick={() => setStep(2)} variant="contained" color="secondary" size='medium'>
                    Back
                </Button>
                <Button style={{ marginLeft: "20px" }} variant="contained" color="primary" size='Medium' onClick={(e) => setStep(4)} >
                    Submit
                </Button>
            </span>

        </div>
    )
}
export default Form3
