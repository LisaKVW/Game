import React, { Component } from 'react'
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
        {comments.length ? (
          comments.map((comments) => (
            <div>
              <h5> {comments.comment}</h5>
              <button className="btn small waves-effect waves-light indigo darken-4"
                onClick={() => this.getDelete(comments._id)} type="submit" name="action"
              ><i className="material-icons ">delete</i>
              </button>
            </div>   
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