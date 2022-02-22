import './App.css';
import React from 'react'
import {Route, Routes} from "react-router-dom";

import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
  return (
      <div>
          <Header/>
          <main>
              <Nav />
              <Routes>
                  <Route path='/messages/*' element={
                      <MessagesContainer/>
                  } />
                  <Route path='/profile/*' element={
                      <Profile/>
                  } />
                  <Route path='/users/*' element={
                      <UsersContainer />
                  } />

              </Routes>
          </main>
      </div>

  )
}

export default App;
