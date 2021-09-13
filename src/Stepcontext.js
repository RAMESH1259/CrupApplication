import React,{useState} from 'react'
import App from './App'
export  const MyContext = React.createContext();
function Stepcontext() {
    const [Currentvalue, setStep] = useState(1)
    const [formdata,setformdata] = useState([])
    return (
        <div>
                <MyContext.Provider value={{Currentvalue, setStep,formdata,setformdata}}>
                    <App/>                    
                </MyContext.Provider>
        </div>
    )
}
export default Stepcontext
