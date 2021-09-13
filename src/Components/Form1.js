import React, { useContext } from 'react'
import { TextField, Button } from '@material-ui/core'
import { MyContext } from '../Stepcontext'
function Form1() {
    const { setStep, formdata, setformdata } = useContext(MyContext);
    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    return (
        <div >
            <h3>First Form</h3>
            <div onChange={handlechange}>
                <div className="form-1">
                    <TextField variant='outlined' label='FirstName' name='FirstName' value={formdata["FirstName"]} />
                </div><br />
                <div className="form-1">
                    <TextField variant='outlined' name='LastName' label='LastName' value={formdata["LastName"]} />
                </div><br />
                <div className="form-1">
                    <TextField variant='outlined' name='Email' label='Email' value={formdata["Email"]}  type='email'/>
                </div>
            </div>
            <br />
            <div>
                <Button onClick={() => setStep(2)} variant="contained" color="primary" size='Medium'>
                    Next
                </Button>
            </div>

        </div>
    )
}

export default Form1
