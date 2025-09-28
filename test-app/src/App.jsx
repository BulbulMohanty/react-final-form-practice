import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import BasicForm from './components/form-level-validation/BasicForm'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basic-form" element={<BasicForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
