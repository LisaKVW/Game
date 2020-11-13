import React, { Component } from 'react'
import TextForm from '../components/TextForm'
import { __RegisterUser } from '../services/UserService'

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDedault()
        try {
            await __RegisterUser(this.state)
            this.props.history.push('/login')
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
        console.log(this.state)
    }

    render() {
        const { name, email, password } = this.state //going set value to the mpty state  --NEED TO ADD name and value - for next textform
        return (
            <div className="signup-form-holder">
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <TextForm
                        placeholder="Your name"
                        name="name"
                        value={name}
                        type="text"
                        onchange={this.handleChange}
                    />
                    <TextForm
                        placeholder="Your email"
                        name="email"
                        value={email}
                        type="email"
                        onchange={this.handleChange}
                    />
                    <TextForm
                        placeholder="password"
                        name="password"
                        value={password}
                        type="password"
                        onchange={this.handleChange}
                    />
                    <button className="btn waves-effect waves-light indigo darken-4" type="submit" name="action">Sign Up
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}

export default Signup

//needs 2 more TextForm