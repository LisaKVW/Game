import React from 'react'
import Nav from '../components/Nav'

const LandingPage = ({ children }) => {
    return (
        <div className="App">
            <header>
                <Nav />
            </header>
            <section>
                {children}
            </section>
        </div>
    )
}

export default LandingPage

//landingpage as wrapper - and can nav from here
//layout for my site