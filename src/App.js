import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import {LoginPage,SignupPage} from "./Routes.js"
import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/sign-up' element={<SignupPage/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

