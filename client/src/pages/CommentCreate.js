import React, { Component } from 'react';
import TextForm from '../components/TextForm'
import { __CreateComment } from '../services/CommentService'

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
      this.props.history.push('/commentRead')
      console.log('push', this.props.history.push)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { comment } = this.state
    return (
      <div className="row" >
        {/* <div className="col s12 m6"> */}
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title"> Game Chat: </span>
            <p>
              <form className="feed-create" onSubmit={this.handleSubmit}>
                <TextForm
                  placeholder="enter your comment here"
                  name="comment"
                  value={comment}
                  onChange={this.handleChange}
                />
                <button className="btn waves-effect waves-light red darken-2" name="action" > Chat
                         <i className="material-icons right">send</i>
                </button>
              </form>
            </p>
          </div>
          {/* </div> */}
        </div>
      </div >
    )
  }
}
export default CommentCreate


//   render() {
//     console.log('fromfeedcreate props:', this.props)
//     const { comment } = this.state   //as user_id is a ref do I have to add it in the render?
//     return (
//       <div className="upload content">
//         <form className="feed-create" onSubmit={this.handleSubmit}>
//           <TextForm
//             placeholder="comment"
//             name="comment"
//             value={comment}
//             onChange={this.handleChange}
//           />
//           <button className="btn waves-effect waves-light indigo darken-4" name="action" > Comment
//                         <i className="material-icons right">send</i>
//           </button>
//         </form>
//       </div>
//     )
//   }
// }