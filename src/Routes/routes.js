import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from '../Components/Home'
import Registration from '../Components/Registration'
import stepperform from '../Components/Stepper'

export default class Routes extends React.Component {
  render() {
    return(
      <div>
        <BrowserRouter> 
            <Route  path="/" exact component={Home} />
          <Switch>
            {/* <Route  path="/home" exact component={Home} /> */}
            {/* <Route  path="/admin-login" exact component={Adminlogin} /> */}
            <Route  path="/Registration" exact component={Registration} />
            <Route  path="/stepperform" exact component={stepperform} />

            <Route  path="/*" />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}