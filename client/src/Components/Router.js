import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import LandingPage from '../pages/LandingPage'

class Router extends Component {
    constructor() {
        super()
        this.state = {
            pageLoading: true
        }
    }
    render() {
        return (
            <main>
                {this.state.pageLoading ?
                    (<h3>Loading...</h3>
                    ) : (
                        <Switch>
                            <Route
                                path="/register"
                                component={(props) => (
                                    <LandingPage>
                                        <SignUp {...props} />
                                    </LandingPage>
                                )}
                            />
                        </Switch>
                    )}
            </main>
        )
    }
}

export default Router
