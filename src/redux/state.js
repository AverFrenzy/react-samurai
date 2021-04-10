import { rerenderTree } from '../rerender';
let state = {
    profilePage: {
        posts: [
            {id:1, message:'Hi,how are u?', likesCount:'15'},
            {id:2, message:'Its my first post', likesCount:'35'},
            {id:3, message:'Oh u are doing well', likesCount:'10'},
            {id:4, message:'Thx u m8', likesCount:'25'}
          ],
        newPostText:''         
    },
    dialogsPage: {
     messages:[
        {id:1, message:'Hello'},
        {id:2, message:'How are u?'},
        {id:3, message:'Hi'},
        {id:4, message:'Im fine,thx'},
          ]
    ,
    dialogs: [
        {id:1, name:'Frost'},
        {id:2, name:'Kozak'},
        {id:3, name:'Anton'},
        {id:4, name:'Anya'},
        {id:5, name:'Ekaterina'},
        {id:6, name:'Diana'},
        {id:7, name:'Jackson'},
        {id:8, name:'Nikolay'}
      ]
      ,
        newMessageText: ''
    }  
  }

export let addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText
  }
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderTree(state);
}

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderTree(state);
}

export let addPost = () => {
  let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCount:0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderTree(state);
}

export  let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderTree(state);
}

  export default state;