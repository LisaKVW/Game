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
        const { name, password, email } = this.state //going set value to the mpty state
        return (
            <div classname="signup-form-holder">
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <TextForm
                        placeholder="Your Name"
                        name="email"
                        value={email}
                        type="email"
                        onchange={this.handleChange}
                    />
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup