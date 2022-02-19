import './App.css';
import React from 'react'
import {Route, Routes} from "react-router-dom";

import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import MessagesContainer from "./components/Messages/MessagesContainer";


const App = (props) => {
  return (
      <div>
          <Header/>
          <main>
              <Nav />
              <Routes>
                  <Route path='/messages/*' element={
                      <MessagesContainer store={props.store} />
                  } />
                  <Route path='/profile/*' element={
                      <Profile store={props.store}/>
                  } />
              </Routes>
          </main>
      </div>

  )
}

export default App;
