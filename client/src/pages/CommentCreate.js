import React, { Component } from 'react';
import TextForm from '../Components/TextForm'
import { __CreateComment } from '../services/CommentService'
import CommentRead from '../pages/CommentRead'

class CommentCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ''
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
      await __CreateComment(this.state)
      // console.log('user_id', this.props.user_id)
      this.props.history.push('/feedRead')
      console.log('push', this.props.history.push)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { comment } = this.state
    return (
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title"> Game Chat: </span>
            <p>
              <form className="feed-create" onSubmit={this.handleSubmit}>
                <TextForm
                  placeholder="What's on your mind?"
                  name="comment"
                  value={comment}
                  onChange={this.handleChange}
                />
                <button className="btn waves-effect waves-light red darken-2" name="action" > Chat
                         <i className="material-icons right">send</i>
                </button>
              </form>
            </p>
          <CommentRead {...this.props} />
          </div>
      </div >
    )
  }
}
export default CommentCreate

