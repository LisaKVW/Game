import React, { Component } from 'react';
import { __GetPosts } from '../services/PostService';
import { __DeletePost } from '../services/PostService'
import UpdatePost from '../pages/UpdatePost'
import CommentCreate from '../pages/CommentCreate'


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


  render(props) {
    const { posts } = this.state
    console.log('render posts', posts)
    return (
      <div>
        <h2> Lets talk games </h2>
        <h4> Find your posts on your games and chat with fellow gamers </h4>
          {posts.length ? (
          <div className="row">
            <div className="col s6">
              {posts.map((posts) => (
            
                    <div class="card">
                      <div class="card-image">
                        <img src={posts.image} />
                        <span class="card-title"> {posts.title_game} </span>
                      </div>
                      <div class="card-content">
                        <p> {posts.share} </p>
                      </div>
                      <div class="card-action">
                        <button className="btn waves-effect waves-light indigo darken-4"
                          onClick={() => this.getDelete(posts._id)} type="submit" name="action"
                        > Delete post
                        <i className="material-icons right">send</i>
                        </button>
                        <UpdatePost {...this.props} id={posts._id} />
                      </div>
                    </div>
            
            ))}
                  </div>
                  <div className="col s6">

                    <CommentCreate {...this.props} />
                  </div>
                </div>
            ) : (
              <h3> No game posts today, sorry 👾 </h3>
              )
            }
      </div>
    )
  }
}

export default FeedRead

