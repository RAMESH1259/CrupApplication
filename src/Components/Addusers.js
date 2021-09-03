import { useState } from 'react'
import React from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
function Addusers(props) {
    const History = useHistory();
    const [personDetails, setuserDetails] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        }
    )

    const onchangehandler = (e) => {
        setuserDetails({
            ...personDetails, [e.target.name]: e.target.value
        })
    }
    const onsubmithandler = async (e) => {
        e.preventDefault();
        const Add = await Axios.post('http://localhost:3002/posts', personDetails)
        History.push('/');
    }

    return (
        <div className='userscontainer'>
            <form className='form' onSubmit={onsubmithandler}>
                <div className="usersformwrapper">
                    <div className='usersformbox'>
                        <label className='label'>FirstName</label>
                        <div className='inputtype'>
                            <input type='text'
                                onChange={onchangehandler}
                                value={personDetails.firstName}
                                name='firstName' />
                        </div>
                    </div>
                    <div className='usersformbox'>
                        <label className='label'>Username</label>
                        <div className='inputtype'> 
                            <input type='text'
                                onChange={onchangehandler}
                                value={personDetails.lastName}
                                name='lastName' />
                        </div>
                    </div>
                    <div className='usersformbox'>
                        <label className='label'>Email</label>
                        <div className='inputtype'>
                            <input
                                type='email'
                                onChange={onchangehandler}
                                value={personDetails.email}
                                name='email' />
                        </div>
                    </div>
                    <div className='usersformbox'>
                        <label className='label'>PhoneNumber</label>
                        <div className='inputtype'>
                            <input type='text'
                                onChange={onchangehandler}
                                value={personDetails.phone}
                                name='phone' />
                        </div>
                        <div className='usersformbox' id='btn5'>
                            <button className='btn4' type='data'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Addusers
