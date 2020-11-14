import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import LandingPage from '../pages/LandingPage'
import { __CheckSession } from '../services/UserService'
import Feed from '../pages/Feed'
import Home from '../pages/Home'


class Router extends Component {
    constructor() {
        super()
        this.state = {
            authenticated: false,
            currentUser: null,
            pageLoading: true
        }
    }


    verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const session = await __CheckSession()
                console.log('session', session)
                this.setState(
                    {
                        currentUser: session.user,
                        authenticated: true
                    },
                    () => this.props.history.push('/feed')
                )
            } catch (error) {
                this.setState({ currentUser: null, authenticated: false })
                localStorage.clear()
            }
        }
    }

    toggleAuthenticated = (value, user, done) => {
        this.setState({ authenticated: value, currentUser: user }, () => done())
    }

    componentDidMount() {
        //checking for token -so user is signed-in and can post/comment
        // this.verifyTokenValid()
        this.setState({ pageLoading: false })
    }

    render() {
        console.log(this.state.pageLoading)
        return (
            <main>
                {this.state.pageLoading ?
                    (<h3>Loading...</h3>
                    ) : (
                        <Switch>
                            <Route
                                exact path="/"
                                component={() => (
                                    <LandingPage>
                                        <Home />
                                    </LandingPage>
                                )}
                            />
                            <Route
                                path="/register"
                                component={(props) => (
                                    <LandingPage>
                                        <SignUp {...props} />
                                    </LandingPage>
                                )}
                            />
                            <Route
                                path="/login"
                                component={(props) => (
                                    <LandingPage>
                                        <SignIn
                                            toggleAuthenticated={this.toggleAuthenticated}
                                            {...props}
                                        />
                                    </LandingPage>
                                )}
                            />
                            <Route
                                path="/feed"
                                component={(props) => (
                                    <Feed />
                                )}
                            />
                            )
                        </Switch>
                    )
                }
            </main>
        )
    }
}

export default withRouter(Router)
