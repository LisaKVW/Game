import React, { Component } from 'react'

class Feed extends Component {
    render() {
        return (
            <div>
                <h1> Lets talk games</h1>
                {/* <div style={{height: '500px', width: '400ps', margin: '0 auto'}}> My input feed form  */}
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <textarea id="textarea1" class="materialize-textarea"></textarea>
                                <label for="textarea1">Textarea</label>
                            </div>
                        </div>
                    </form>
                </div>
                <p> My feed </p>
                {/* //link? */}
                <button className="btn waves-effect waves-light indigo darken-4" type="submit" name="action">Submit post
                        <i className="material-icons right">send</i>
                </button>
            </div>
        )
    }
}

export default Feed

//title_game - share - image(optional, userid, commentid)