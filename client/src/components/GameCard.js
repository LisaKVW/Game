import React, { Component } from 'react';
import FeedCreate from '../pages/FeedCreate'

class GameCard extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <div style={{ minHeight: "85vh", backgroundImage: `url('${this.props.game.background_image}')`, backgroundSize: "cover", paddingTop: "3vh" }}>
          <h1 style={{ backgroundColor: "rgba(0,0,0,0.8)", color: "white", maxWidth: "60vw", padding: "10px", margin: "0 auto", borderRadius: "10px" }}> {this.props.game.name}</h1>
          <div style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "white", maxWidth: "60vw", padding: "10px", margin: "20vh auto", borderRadius: "10px" }}>
            <p> {this.props.game.description_raw} </p>

            <h4> Rating: {this.props.game.rating}</h4>
          </div>
        </div>
        <div>
          <h1> Posts </h1>
          <FeedCreate gameName GameApiId gameImage />
        </div>
      </div>
    )
  }
}

export default GameCard