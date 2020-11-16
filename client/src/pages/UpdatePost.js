import React, { Component } from 'react'
import TextForm from '../components/TextForm'
import { __UpdatePost } from '../services/PostService'
import { __GetPosts } from '../services/PostService'

class UpdatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title_game: '',
      share: '',
      image: ''
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    try {
      const post = await __GetPosts(this.props.match.params.post_id)
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
      console.log(this.props.match.params.post_id)
      await __UpdatePost(this.state, this.props.match.params.post_id)
      let updatedNewPost = this.props.match.params.post_id
      this.props.history.push(`/feedCreate/${updatedNewPost}`)
      console.log('updatednewpost', `${updatedNewPost}`)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { title_game, share, image } = this.state   //as user_id is a ref do I have to add it in the render?
    console.log('render state', this.state)
    return (
      <div className="update content">
        <form className="feed-update-form" onSubmit={this.handleSubmit}>
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
          <button className="btn waves-effect waves-light indigo darken-4" name="action" > Update post
                        <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    )
  }
}

export default UpdatePost