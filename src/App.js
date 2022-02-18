import './App.css';
import React from 'react'
import {Route, Routes} from "react-router-dom";

import Header from './components/Header/Header';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";


const App = (props) => {
  return (
      <div>
          <Header/>
          <main>
              <Nav />
              <Routes>
                  <Route path='/dialogs/*' element={
                      <Dialogs messagesPage={props.state.messagesPage} />
                  } />
                  <Route path='/profile/*' element={
                      <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
                  } />
              </Routes>
          </main>
      </div>

  )
}

export default App;
