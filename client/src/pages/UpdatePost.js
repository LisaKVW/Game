import React, { Component } from 'react'
import TextForm from '../components/TextForm'
import { __UpdatePost } from '../services/PostService'
import { __GetPostById } from '../services/PostService'

class UpdatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post_title: '',
      share: ''
    }
  }

  componentDidMount() {
    this.GetPostById()
  }

  GetPostById = async () => {
    try {
      const post = await __GetPostById(this.props.match.params.post_id)
      console.log("post tag:", post)
      this.setState({
        title: post.title_game,
        description: post.share,
        image: post.image
      })
    } catch (error) {
      console.log(error)
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
      console.log(this.props.id)
      await __UpdatePost(this.state, this.props.id)
      this.props.history.push('/feedRead')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { post_title, share, } = this.state    //as user_id is a ref do I have to add it in the render?
    console.log('render state', this.state)
    return (
      <div className="update content">
        <form className="feed-update-form" onSubmit={this.handleSubmit}>
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
          <button className="btn waves-effect waves-light cyan darken-1
          " name="action" > Update post
                        <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    )
  }
}

export default UpdatePost