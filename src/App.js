import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <div className = 'app-wrapper'>
      <Header />
      <Navbar />
      <div className = 'app-wrapper-content'>
        <Route path = '/Dialogs' 
               render = {() => <Dialogs 
               dialogsPage = {props.state.dialogsPage}
               updateNewMessageText = {props.updateNewMessageText}
               addMessage = {props.addMessage}
               /> } />

        <Route path = '/Profile' 
               render = {() => <Profile 
               profilePage = {props.state.profilePage} 
               addPost = {props.addPost} 
               updateNewPostText = {props.updateNewPostText}/> } />

        <Route path = '/News' render={() => <News />} />
        <Route path = '/Music' render ={() => <Music />} />
        <Route path = '/Settings' render ={() => <Settings />} />
      </div>
      </div>
  );
}



export default App;
