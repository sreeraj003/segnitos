import './App.css'
import Home from './Home/Home'
import Menu from './Menu/Menu'
import About from './About/About'
import Products from './Products/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Testimoials from './Testimonials/Testimonials'
import Contact from './Contact/Contact'
import Nav from './NavBar/Nav'
import Footer from './Footer/Footer'
function App() {

  return (
    <div className='app'>
      <Router>
        <Nav />
        <div className=" row ms-2">
          <div className="col-2 ">
            <Menu />
          </div>
          <div className="col-10 inside ">
            <div className="inner">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/testimonials' element={<Testimoials />} />
              </Routes>
            </div>
          </div>
          <Footer/>
        </div>
      </Router>

    </div>
  )
}

export default App
