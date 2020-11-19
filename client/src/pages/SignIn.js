import React, { Component } from 'react'
import TextForm from '../Components/TextForm'
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
      this.props.toggleAuthenticated(true, loginData.user, () =>
        this.props.history.push('/allGames')
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
      <div className="signin-form-holder"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",
          backgroundSize: "cover", minHeight: "91vh", paddingTop: "5vh"
        }}>
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