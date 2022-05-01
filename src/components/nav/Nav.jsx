import React from 'react'
import './nav.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

/*const DarkMode = () => {
  const moon = document.querySelector('.ri-moon-fill')
  const sun = document.querySelector('.ri-sun-fill')

  moon.classList.toggle("disable")
  sun.classList.toggle("show")
}

const LightMode = () => {
  const moon = document.querySelector('.ri-moon-fill')
  const sun = document.querySelector('.ri-sun-fill')

  moon.classList.remove("disable")
  sun.classList.remove("show")
}*/

const Nav = () => {

const [navbar, setNavbar] = useState(false)
const [dark, setDark] = useState(false)

const onScroll = () => {
  if(window.scrollY > 0) {
    setNavbar(true)
  } else {
    setNavbar(false)
  }
}

window.addEventListener("scroll", onScroll)

const className = dark ? "": "darkmode"

  return (
    <motion.header className={navbar ? "header show" : "header"}>
      <nav className="container-nav">
        <div className="container-list">
          <ul className='lista-nav'>
            <motion.li initial={{ translateY: 0 }}
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.6 }}>
              <a href='#Home'>
                Home
              </a>
            </motion.li>
            <motion.li initial={{ translateY: 0 }}
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.6 }}>
              <a href='#About'>
                About
              </a>
            </motion.li>
            <motion.li initial={{ translateY: 0 }}
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.6 }}>
              <a href='#Products'>
                Products
              </a>
            </motion.li>
            <motion.li initial={{ translateY: 0 }}
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.6 }}>
              <a href='#FAQs'>
                FAQ's
              </a>
            </motion.li>
            <motion.li initial={{ translateY: 0 }}
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.6 }}>
              <a href='#Contact'>
                Contact
              </a>
            </motion.li>
          </ul>
        </div>
        <motion.div initial={{ translateY: 0 }}
            whileHover={{ translateY: -5 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.6 }} className="container-search">
          <i class="ri-search-eye-line"></i>
        </motion.div>
        <motion.div initial={{ translateY: 0 }}
            whileHover={{ translateY: -5 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.6 }} className="container-cart">
          <i onClick={() => setDark(!dark)} class={["ri-moon-fill", className].join(" ")}></i>
          <i onClick={() => setDark(dark)} class={["ri-sun-fill", className].join(" ")}></i>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Nav