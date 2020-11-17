import React, { Component } from 'react';
import TextForm from '../components/TextForm'
import { __CreateComment } from '../services/CommentService'

class FeedCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: this.props.gameName,
      post_id: this.props.currentUser,
     
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