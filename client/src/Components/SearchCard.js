import React from 'react'

const SearchCard = (props) => (
      <div className= "col s4">
       <div className="card" onClick={props.onClick} >
          <div className="card-image">
            <img src={props.image} alt="image" style={{ height: "200px", objectFit: "cover" }} />
              <span className="card-title">  {props.name} </span>
               </div>
            <div className="card-content">
             <p> Rating: {props.rating}</p>
            </div>
        </div>
  </div>
)

export default SearchCard
