import './App.css';
import React from 'react'
import {Route} from "react-router-dom";

import Nav from "./components/Nav/Nav";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = () => {
  return (
      <div>
          <HeaderContainer/>
          <main>
              <Nav />
              <Route path='/messages/' render={
                  () => <MessagesContainer/>
              } />
              <Route path='/profile/:userId?' render={
                  () => <ProfileContainer />
              } />
              <Route path='/users/' render={
                  () => <UsersContainer />
              } />
              <Route path='/login/' render={
                  () => <LoginPage />
              } />

          </main>
      </div>

  )
}

export default App;
