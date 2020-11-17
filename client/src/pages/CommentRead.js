import React, { Component } from 'react'
import CommentCreate from './CommentCreate'
import { __GetComments } from '../services/CommentService'
import { __RemoveComment } from '../services/CommentService'

class CommentRead extends Component{
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  componentDidMount(){
    this.getComments()
  }

  getComments = async () => {
    const showComments = await __GetComments()
    this.setState({ comments: [...this.state.comments, ...showComments] })
    console.log(showComments)
  }

  getDelete = async (id) => {
    console.log('delete comment', this.state.comments)
    try {
      const keepComment = this.state.comments.filter((comment) => comment._id !== id)
      this.setState({ comments: keepComment })
      await __RemoveComment(id)
    } catch (error) {
      console.log(error)
    }
  }

  render(props) {
    const { comments } = this.state
    console.log('render comments', comments)
    return (
      <div>
        <h2> Lets talk games </h2>
        {comments.length ? (
          comments.map((comments) => (
            // <div className="row" diplay="inline-block" >
            //   <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title"> Comments: </span>
                      <p> {comments.comment}</p>
                       <button className="btn waves-effect waves-light indigo darken-4"
                        onClick={() => this.getDelete(comments._id)} type="submit" name="action"
                        > Remove chat
                        <i className="material-icons right">send</i>
                </button>
                  </div>
                </div>
            //   </div>
            // </div>
          ))
        ) : (
            <h3> No chat today, sorry 👾 </h3>
          )
        }
      </div>
    )
  }
  }

export default CommentRead