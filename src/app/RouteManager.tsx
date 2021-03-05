import React from "react"
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Todos from "./pages/todos/Todos"

const RouteManager = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Todos} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
}

export default RouteManager
