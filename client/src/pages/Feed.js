import React, { Component } from 'react'

class Feed extends Component {
   render() {
       return (
           <div>
               <h1> Lets talk games</h1>
               <div style={{height: '500px', width: '400ps', margin: '0 auto'}}> My input feed form 
               <p> My feed </p>
               {/* //link? */}
                   <button className="btn waves-effect waves-light indigo darken-4" type="submit" name="action">Sign Up
                        <i className="material-icons right">send</i>
                   </button>
               </div>
           </div>
       )
   }
}

export default Feed

//title_game - share - image(optional, userid, commentid)