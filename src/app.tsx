import './app.css'
import { Routes, Route } from 'react-router-dom'
import Albums from './components/Albums/Albums'
import Header from './components/Header'
import Pictures from './components/Pictures/Pictures'
import Welcome from './components/Welcome'
import { useState } from 'react'

export function App () {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  return (
    <div className='App'>
      <Header isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path='/' element={<Welcome setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path='albums'
          element={<Albums setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path='albums/:id/photos' element={<Pictures />} />
      </Routes>
    </div>
  )
}
