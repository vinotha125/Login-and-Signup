import React from 'react'
import SignUpForm from './SignUpForm'
import Login from './Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUpForm/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;