import classes from './MyPosts.module.css'
import React from 'react'
import Post from './Post/Post'
const MyPosts = (props) => {

  let postElements = 
  props.posts.map (post => <Post message = {post.message} likes = {post.likesCount} /> )

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    }

    return <div className = {classes.content}>
    <div className = {classes.postBlock}>
      <h3>my posts</h3>
      <div>
        <div>
      <textarea onChange = {onPostChange} ref={newPostElement} value = {props.newPostText}/>
      </div>
      <div>
      <button onClick= { props.addPost } > Add post </button>
      </div>
    </div>
    <div className = {classes.posts}>
      {postElements}
    </div>
    </div>
    </div>
}

export default MyPosts;