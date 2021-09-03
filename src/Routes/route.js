import React from 'react'
import Home from '../Components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function route() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default route
