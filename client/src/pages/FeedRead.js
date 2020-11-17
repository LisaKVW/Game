import React, { Component } from 'react';
import { __GetPosts } from '../services/PostService';
import { __DeletePost } from '../services/PostService'
// import { __UpdatePost } from '../services/PostService'
import UpdatePost from '../pages/UpdatePost'
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

  // getUpdate = async (e) => {
  //   e.prevenDefault()
  //   try {
  //     await __UpdatePost(this.state, this.props.match.params.post_id)
  //     this.props.history.push('/feedCreate')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  render(props) {
    const { posts } = this.state
    return (
      <div>
        <h2> Lets talk games </h2>
        {posts.length ? (
          posts.map((posts) => (
            <div>
              <div class="row">
                <div class="col s12 m7">
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
                      {/* <button className="btn waves-effect waves-light cyan darken-1"
                        onClick={() => this.getUpdate(posts._id )} type="submit" 
                      > Update post
                   <i className="material-icons right">send</i>
                      </button> */}

                    </div>
                  </div>
                </div>
              </div>
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

  // < h4 > { posts.title_game } </h4 >
  //             <p>  {posts.share} </p>
  //             <p>  {posts.image} </p>
  //             <button className="btn waves-effect waves-light indigo darken-4"
  //               onClick={() => this.getDelete(posts._id)} type="submit" name="action"
  //             > Delete post
  //               <i className="material-icons right">send</i>
  //             </button>

  //             <button className="btn waves-effect waves-light red lighten-1"
  //               type="submit" name="action" onClick={() => this.props.history.push('/update')}
  //             > Update post
  //               <i className="material-icons right">send</i>
  //             </button>
