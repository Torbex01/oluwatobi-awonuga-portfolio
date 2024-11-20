import Intro from './components/Intro'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home/Home'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
     <Routes>
      <Route path='/' element= { <Home/>} />
      <Route path="/about" element= {<Intro/>} />
      <Route path="/projects" element= {<Projects/>} />
      <Route path="/contact" element= {<Contact/>} />
      
     </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
