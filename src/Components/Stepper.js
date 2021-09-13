import {Stepper,StepLabel,Step} from '@material-ui/core'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import {MyContext} from '../Stepcontext'
import React,{useContext} from 'react'
import Displayformdata from './Displayformdata'
function Home() {
const {Currentvalue}= useContext(MyContext);
  
const stepperfunction=(value)=>{
  switch(value)
  {
    case 1:
      return <Form1/>
    case 2:
      return <Form2/>
    case 3:
      return <Form3/>
   case 4:
    return <Displayformdata/>
  }
}
  return (
    <div className="App">
      <h2 className="home-title">Stepper Form</h2>
      <div className='container-home'>
      <Stepper activeStep={Currentvalue-1 } >
        <Step><StepLabel/></Step>
        <Step><StepLabel/></Step>
        <Step><StepLabel/></Step>
        </Stepper>
        {stepperfunction(Currentvalue)}
        </div>
    </div>
  );
}

export default Home;
