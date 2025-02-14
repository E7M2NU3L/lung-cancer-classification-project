import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './routes/home'
import Docs from './routes/docs'
import Code from './routes/code'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
