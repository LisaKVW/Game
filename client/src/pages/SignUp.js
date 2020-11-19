import React, { Component } from 'react'
import TextForm from '../Components/TextForm'
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

    handleChange = ({ target }) => {
        console.log(this.state)
        this.setState({ [target.name]: target.value })
        console.log(this.state)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await __RegisterUser(this.state)
            this.props.history.push('/login')
        } catch (error) {
            console.log(error)
        }
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
                        onChange={this.handleChange}
                    />
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
                    <button className="btn waves-effect waves-light indigo darken-4">Sign Up
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}

export default Signup

