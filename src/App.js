import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
