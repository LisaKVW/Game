import React, { Component } from 'react';
// import { __DeletePost } from '../services/PostService'
// import { __GetPosts} from '../services/PostService'
// import { __UpdatePost} from '../services/PostService'
// //will need post and delete comment to - 


class FeedRead extends Component {
  constructor() {
    super()
    this.state = {
      postFetchError: false,
      posts: []
    }
  }



  render() {
    return (
      <div>
        Read feed here
      </div>
    )
  }
}

export default FeedRead