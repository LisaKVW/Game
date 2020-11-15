import React, { Component } from 'react'
import TextForm from '../components/TextForm'
import { __LoginUser } from '../services/UserService'

class Signin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const loginData = await __LoginUser(this.state)
      console.log(loginData)
      this.props.toggleAuthenticated(true, loginData.user_id, () =>
        this.props.history.push('/feedCreate')
      )
    } catch (error) {
      this.setState({ formError: true })
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
    console.log(this.state)
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="signin-form-holder">
        <form className="signin-form" onSubmit={this.handleSubmit}>
          <TextForm
            placeholder="Your email"
            name="email"
            value={email}
            type="email"
            onChange={this.handleChange}
          />
          <TextForm
            placeholder="password"
            name="password"
            value={password}
            type="password"
            onChange={this.handleChange}
          />
          <button className="btn waves-effect waves-light indigo darken-4" type="submit" name="action">Sign In
                        <i className="material-icons right">send</i>
          </button>
          {this.state.formError ? <p>Error While Logging In</p> : <p></p>}
        </form>
      </div>
    )
  }
}

export default Signin