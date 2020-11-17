import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import LandingPage from '../pages/LandingPage'
import { __CheckSession } from '../services/UserService'
import FeedCreate from '../pages/FeedCreate'
import FeedRead from '../pages/FeedRead'
import Home from '../pages/Home'
import UpdatePost from '../pages/UpdatePost'
import AllGames from '../pages/AllGames'
import ProtectedRoute from '../components/ProtectedRoute'


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
                    () => this.props.history.push('/feedCreate')
                )
            } catch (error) {
                this.setState({ currentUser: null, authenticated: false })
                localStorage.clear()
            }
        }
    }

    toggleAuthenticated = (value, user, done) => {
        this.setState({ authenticated: value, currentUser: user }, () => done())
        console.log('the state', this.state)
    }


    render() {
        console.log('before', this.state.pageLoading)
        return (
            < main >
                { this.state.pageLoading ?
                    (<h3>Loading...</h3>
                    ) : (
                        <LandingPage {...this.props}
                            authenticated={this.state.authenticated}
                            currentUser={this.state.currentUser}
                        >
                            <Switch>
                                <Route
                                    exact path="/"
                                    component={(props) => (
                                        <Home />
                                    )}
                                />
                                <Route
                                    path="/register"
                                    component={(props) => (
                                        <SignUp {...props} />
                                    )}
                                />
                                <Route
                                    path="/login"
                                    component={(props) => (
                                        <SignIn
                                            toggleAuthenticated={this.toggleAuthenticated}
                                            {...props}
                                        />
                                    )}
                                />
                                <Route
                                    path="/feedCreate"
                                    component={(props) => (
                                        <FeedCreate {...props} />
                                    )}
                                />
                                <Route
                                    path="/feedRead"
                                    component={(props) => (
                                        <FeedRead {...props}
                                            currentUser={this.state.currentUser}
                                            authenticated={this.state.authenticated}
                                        />
                                    )}
                                />
                                <ProtectedRoute
                                    path='/update'
                                    component={(props) => (
                                        <UpdatePost  {...props}
                                        currentUser={this.state.currentUser}
                                        authenticated={this.state.authenticated}
                                        />
                                    )}
                                />
                                <Route
                                    path='/allgames'
                                    component={(props) => (
                                        <AllGames {...props}
                                            currentUser={this.state.currentUser}
                                            authenticated={this.state.authenticated}
                                        />

                                    )}
                                />
                                <ProtectedRoute
                                    path='/updatePost'
                                    component={(props) => (
                                        <UpdatePost {...props}
                                            currentUser={this.state.currentUser}
                                            authenticated={this.state.authenticated}
                                        />
                                    )}
                                />
                            </Switch>
                        </LandingPage>
                    )
                }
            </main >
        )
    }
}

export default withRouter(Router)