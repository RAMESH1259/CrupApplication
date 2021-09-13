import React, { useContext } from 'react'
import { Typography } from '@material-ui/core/'
import { MyContext } from '../Stepcontext'
function Displayformdata() {
    const { formdata } = useContext(MyContext)
    return (
        <div>
            <Typography variant="h6" component="h2" color="primary">
                You have successfully registered
            </Typography>
            <h3>FirstName:{formdata["FirstName"]}</h3>
            <h3>LastName:{formdata["LastName"]}</h3>
            <h3>Email:{formdata["Email"]}</h3>
            <h3>Mobile:{formdata["Mobile"]}</h3>
            <h3>State:{formdata["state"]}</h3>
            <h3>Pincode:{formdata["pincode"]}</h3>
            <h3>Gender:{formdata["gender"]}</h3>
            <h3>City:{formdata["city"]}</h3>
            <h3>DOB:{formdata["dob"]}</h3>
            {console.log(formdata)}
        </div>
    )
}

export default Displayformdata
