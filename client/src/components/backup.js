import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import LandingPage from '../pages/LandingPage'
import { __CheckSession } from '../services/UserService'
import FeedCreate from '../pages/FeedCreate'
import FeedRead from '../pages/FeedRead'
import Home from '../pages/Home'


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
    // this.setState({ pageLoading: false })    // note by default is false
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

