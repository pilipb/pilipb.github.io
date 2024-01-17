import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'
import ScrollableWrapper from './components/Scroll'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'


function App() {
  return (
    <>
      {/* <BrowserRouter> */}
        <ScrollableWrapper>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ScrollableWrapper>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App