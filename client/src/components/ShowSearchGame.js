import React from 'react';

const ShowSearchGame = (props) =>
  (
    <div className="show-search-game" onClick={props.onClick} >

      <div className="img-game">
        <img src={props.image} alt="image"
        />
      </div>

      <div className="name-info">
        <h3>
          {props.name}
        </h3>
        <p>
          {props.description}
          {props.rating}
          {props.released}
          {props.platforms}
        </p>
      </div>
    </div>
  )

export default ShowSearchGame
