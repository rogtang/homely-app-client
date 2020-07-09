import React from 'react'

const PostsContext = React.createContext({
  posts: [],
  addPost: () => {},
  addUser: () => {},
  updatePost: () => {},
  deletePost: () => {},
})

export default PostsContext