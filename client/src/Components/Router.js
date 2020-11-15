import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import LandingPage from '../pages/LandingPage'
import { __CheckSession } from '../services/UserService'
import FeedCreate from '../pages/FeedCreate'
import FeedRead from '../pages/FeedRead'
import Home from '../pages/Home'
import GameReads from '../pages/GameReads'


class Router extends Component {
    constructor() {
        super()
        this.state = {
            authenticated: false,
            currentUser: null,
            pageLoading: false
        }
    }
    componentDidMount() {
        //checking for token -so user is signed-in and can post/comment
        this.verifyTokenValid()
        // this.setState({ pageLoading: false })    // note by default is false - so no need
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
                        authenticated: true,
                        pageLoading: true
                    },
                    () => this.props.history.push('/feedRead')
                )
            } catch (error) {
                this.setState({ currentUser: null, authenticated: false })
                localStorage.clear()
            }
        }
    }

    toggleAuthenticated = (value, user, done) => {
        this.setState({ authenticated: value, currentUser: user }, () => done())
        console.log('the state', this.setState)
    }


    render() {
        console.log('before', this.state.pageLoading)
        return (
            < main >
                { this.state.pageLoading ?
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
                                    <LandingPage {...props}>
                                        <SignIn
                                            toggleAuthenticated={this.toggleAuthenticated}
                                            {...props}
                                        />
                                    </LandingPage>
                                )}
                            />
                            <Route
                                path="/feedCreate"
                                component={(props) => (
                                    <LandingPage {...props}>
                                        <FeedCreate {...props} />
                                    </LandingPage>
                                )}
                            />
                            <Route
                                path="/feedRead"
                                component={(props) => (
                                    <LandingPage {...props}>
                                        <FeedRead {...props}
                                            currentUser={this.state.currentUser}
                                            authenticated={this.state.authenticated}
                                        />
                                    </LandingPage>
                                )}
                            />
                            <Route
                                path='/GameReads'
                                component={(props) => (
                                    <GameReads />
                                )}
                            />
                        </Switch>
                    )
                }
            </main >
        )
    }
}

export default withRouter(Router)