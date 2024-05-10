import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Jobs from './components/jobs/Jobs'
import Protectedroute from './components/protctedrouter/Protectedroute'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Protectedroute Component={Home} />} />
      <Route path='/login' element={<Login />} />
      <Route path='/jobs' element={<Protectedroute Component={Jobs} />} />
      </Routes>
    </>
  )
}

export default App