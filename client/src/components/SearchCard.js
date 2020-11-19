import React from 'react'

const SearchCard = (props) => (
  <div className="card game-card" onClick={props.onClick} >
    <div className="row center-cols center-align">
      <div className="col m6">
        <div className="card">
          <div className="card-image">
            <img src={props.image} alt="image" style= {{minHeight:"45vh", paddingTop: "0vh" }}/>
            <span className="card-title">  {props.name} </span>
             </div>
            <div className="card-content">
             <p> Rating: {props.rating}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
)

export default SearchCard
