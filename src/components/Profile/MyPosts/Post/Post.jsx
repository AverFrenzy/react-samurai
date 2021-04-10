import classes from './Post.module.css'
const Post = (props) => {
  return (
    <div className={classes.item}>
     <img src = 'https://64.media.tumblr.com/84365fe19039b5fd917d6d449ca86290/tumblr_op4lb5DPRe1qg6rkio1_1280.jpg'/>
      { props.message }
      <div>
        <span>like {props.likes}</span>
      </div>
    </div>
  )
}

export default Post;