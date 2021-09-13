import React,{useContext} from 'react'
import { TextField, Button } from '@material-ui/core'
import {MyContext} from '../Stepcontext'
function Form2() {
    const { setStep,formdata,setformdata}=useContext(MyContext);
    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h3>Second Form</h3>
            <div onChange={handlechange}>
            <div className="form-1">
                <TextField variant='outlined'  name='Mobile' label='Mobile' value={formdata["Mobile"]} />
            </div><br/>
            <div className="form-1">
                <TextField variant='outlined' name='state' label='state' value={formdata["state"]} />
            </div><br/>
            <div className="form-1">
                <TextField variant='outlined' name='pincode' label='pincode' value={formdata["pincode"]} />
            </div>
            </div><br/>
            <span>
            <Button onClick={()=>setStep(1)} variant="contained" color="secondary" size='Medium'>
                    Back
                </Button>
            <Button style={{marginLeft:"20px"}} onClick={()=>setStep(3)} variant="contained" color="primary" size='Medium'>
                    Next
                </Button>
        
                </span>

        </div>
    )
}

export default Form2
