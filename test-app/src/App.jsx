import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import FormWithFormLevelValidation from './components/form-level-validation/BasicForm'
import FormWithFieldLevelValidation from './components/field-level-validation/BasicForm'


function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-level-validation" element={<FormWithFormLevelValidation />} />
          <Route path="/field-level-validation" element={<FormWithFieldLevelValidation />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
