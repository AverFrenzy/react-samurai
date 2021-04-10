import classes from './Message.module.css';

const Message = (props) => {
  return (
    <div className = {classes.message}>
         <img src="https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/master/w_2560%2Cc_limit/Culture-Grumpy-Cat-487386121-2.jpg"/> {props.message}
        </div>
  )
}

export default Message;