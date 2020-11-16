import React, { Component } from 'react';
import { __GetPosts } from '../services/PostService';
import { __DeletePost } from '../services/PostService'
// import { __UpdatePost} from '../services/PostService'
// //will need post and delete comment to - 


class FeedRead extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    const showPosts = await __GetPosts()
    this.setState({ posts: [...this.state.posts, ...showPosts] })
    console.log(showPosts)
  }

  getDelete = async (id) => {
    try {
      const keepPost = this.state.posts.filter((post) => post._id !== id)
      this.setState({ posts: keepPost })
      await __DeletePost(id)
    } catch (error) {
      console.log(error)
    }
  }


  render() {
    const { posts } = this.state
    return (
      <div>
        <h2> Lets talk games </h2>
        {posts.length ? (
          posts.map((posts) => (
            <div>
              <h2> {posts.title_game} </h2>
              <p>  {posts.share} </p>
              <p>  {posts.image} </p>
              <button className="btn waves-effect waves-light indigo darken-4"
                onClick={() => this.getDelete(posts._id)} type="submit" name="action"
              > Delete post
                <i className="material-icons right">send</i>
                console.log()
              </button>
            </div>
          ))
        ) : (
            <h3> No game talk today, sorry 👾 </h3>
          )
        }
      </div>
    )
  }
}

export default FeedRead