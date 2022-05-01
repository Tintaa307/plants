import React from 'react'
import './home.css'
import Img from '../../assets/img/home-img.png'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <section className="section-home" id='Home'>
      <div className="container-home">
        <picture className="container-img">
          <motion.img initial={{ translateX: 100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 2.2 }} src={Img} alt="" />
        </picture>
        <div className="container-title">
          <motion.h1 initial={{ x: -600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1 }} >Plants Will Make <br /> Your Life Better</motion.h1>
          <motion.p initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1.4 }}>
            Create incredible plant design for your offices or apastaments. Add fresness to your new ideas.
          </motion.p>
        </div>
        <motion.div initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1.8 }} className="container-btn">
          <button>
            Explore
            <i class="ri-arrow-right-down-line"></i>
          </button>
        </motion.div>
        <motion.div className="contaitner-redes">
          <ul className="lista-redes">
            <motion.li initial={{ translateY: 0, opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.6, delay: 2.4 }}>
              <a href="#"><i class="ri-instagram-line"></i></a>
            </motion.li>
            <motion.li initial={{ translateY: 0, opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.6, delay: 2.6 }}>
              <a href="#"><i class="ri-facebook-fill"></i></a>
            </motion.li>
            <motion.li initial={{ translateY: 0, opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.6, delay: 2.8 }}>
              <a href="#"><i class="ri-twitter-line"></i></a>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Home