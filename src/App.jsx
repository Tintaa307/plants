import './App.css'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Products from './components/products/Products'
import Featured from './components/featured/Featured'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Nav/>
      <Home/> 
      <About/>
      <Products/>
      <Featured/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App