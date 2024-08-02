import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Stays from './Pages/Stays'
import Error from './Pages/Error'
import About from './Pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import '@fontsource/montserrat'
import styled from 'styled-components'

const FontStyle = styled.div`
  font-family: 'Montserrat';
`
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <FontStyle>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stays/:idStay" element={<Stays />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </FontStyle>
    </Router>
  </React.StrictMode>
)
