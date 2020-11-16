import React from 'react'
import Nav from '../components/Nav'


const LandingPage = (props) => {
    console.log(props)
    return (
        <div className="App">
            <header>
                <Nav authenticated={props.authenticated} 
                    currentUser={props.currentUser}
                />
            </header>
            <section>
                {props.children}
            </section>
        </div>
    )
}

export default LandingPage

//landingpage as wrapper - and can nav from here
//layout for my site