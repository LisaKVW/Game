import React, { Component } from 'react';
import TextForm from '../components/TextForm'
import { __UploadPost } from '../services/PostService'

class FeedCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title_game: '',
            share: '',
            image: '',
            user_id: null
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
        console.log('setState', this.setState)
        console.log('target', ({ [target.name]: target.value }))
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await __UploadPost(this.state, this.props.user_id)
            console.log('uploadpost', __UploadPost)
            console.log('user_id', this.props.user_id)
            this.props.history.push('/feedRead')
            console.log('history', this.props.history)
            console.log('push', this.props.history.push)
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        const { title_game, share, image } = this.state   //as user_id is a ref do I have to add it in the render?
        return (
            <div className="upload content">
                <form className="feed-create" onSubmit={this.handleSubmit}>
                    <TextForm
                        placeholder="Title game"
                        name="title_game"
                        value={title_game}
                        onChange={this.handleChange}
                    />
                    <TextForm
                        placeholder="share your game thought(s)"
                        name="share"
                        value={share}
                        onChange={this.handleChange}
                    />
                    <TextForm
                        placeholder="Image url"
                        name="image"
                        value={image}
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