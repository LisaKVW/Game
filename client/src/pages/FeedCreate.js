import React, { Component } from 'react';
import TextForm from '../components/TextForm'
import { __UploadPost } from '../services/PostService'

class FeedCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title_game: this.props.gameName,
            api_id: this.props.gameApiId,
            share: '',
            image: this.props.gameImage,
            user_id: this.props.currentUser,
            post_title: ''
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
        console.log('setState', this.setState)
        console.log('target', ({ [target.name]: target.value }))
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log('upload', this.state)
        console.log('history', this.props)
        try {
            await __UploadPost(this.state)
            // console.log('user_id', this.props.user_id)
            this.props.history.push('/feedRead')
            console.log('push', this.props.history.push)
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        console.log('fromfeedcreate props:', this.props)
        const { post_title, share, } = this.state   //as user_id is a ref do I have to add it in the render?
        return (
            <div className="upload content">
                <form className="feed-create" onSubmit={this.handleSubmit}>
                    <TextForm
                        placeholder="post title"
                        name="post_title"
                        value={post_title}
                        onChange={this.handleChange}
                    />
                    <TextForm
                        placeholder="share your game thought(s)"
                        name="share"
                        value={share}
                        onChange={this.handleChange}
                    />
                    <button className="btn waves-effect waves-light indigo darken-4" name="action" >Submit post
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}

export default FeedCreate

//title_game - share - image(optional, userid, commentid)

//sample done adam and lizz with materliaze format
//     < div >
//     <h1> Lets talk games</h1>
//  <div style={{height: '500px', width: '400ps', margin: '0 auto'}}> My input feed form  
//                 <div class="row">
//                     <form class="col s12">
//                         <div class="row">
//                             <div class="input-field col s12">
//                                 <textarea id="textarea1" class="materialize-textarea"></textarea>
//                                 <label for="textarea1">Textarea</label>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//                 <p> My feed </p>
// {/* //link? */ }
// <button className="btn waves-effect waves-light indigo darken-4" type="submit" name="action">Submit post
//                         <i className="material-icons right">send</i>
// </button>
//             </div >