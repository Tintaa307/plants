import React from 'react'
import './about.css'
import Img from '../../assets/img/about-img.png'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="section-about" id='About'>
        <article className='about-info'>
            <motion.picture initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} 
            transition={{ duration: 1, type: 'spring', bounce: 0.7, delay: 1.4 }} className="container-img">
                <img src={Img} alt="" />
            </motion.picture>
            <div className="container-informacion">
                <motion.h1 initial={{ translateY: -100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                viewport={{ once: true }} 
                transition={{ duration: 0.6, type: 'spring', bounce: 0.7, delay: 1.8 }} >Who we really are & <br /> Why choose us</motion.h1>
                <motion.p initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                viewport={{ once: true }} 
                transition={{ duration: 0.6, type: 'spring', bounce: 0.7, delay: 2 }}>
                    We have over 4000+ unblased reviews and our customers trust our plant process and delivery service every time.
                </motion.p>
                <div className="container-list">
                    <ul className='lista-serv'>
                        <motion.li initial={{ translateX: 50, opacity: 0 }}
                            whileInView={{ translateX: 0, opacity: 1 }}
                            viewport={{ once: true }} 
                            transition={{ duration: 0.6, type: 'spring', bounce: 0.7, delay: 2.2 }}>
                            <i class="ri-chat-check-fill"></i>
                            <h3>We always delivery on time.</h3>
                        </motion.li>
                        <motion.li initial={{ translateX: 50, opacity: 0 }}
                            whileInView={{ translateX: 0, opacity: 1 }}
                            viewport={{ once: true }} 
                            transition={{ duration: 0.6, type: 'spring', bounce: 0.7, delay: 2.4 }}>
                            <i class="ri-chat-check-fill"></i>
                            <h3>We give you guides to protect and core for your plants.</h3>
                        </motion.li>
                        <motion.li initial={{ translateX: 50, opacity: 0 }}
                            whileInView={{ translateX: 0, opacity: 1 }}
                            viewport={{ once: true }} 
                            transition={{ duration: 0.6, type: 'spring', bounce: 0.7, delay: 2.6 }}>
                            <i class="ri-chat-check-fill"></i>
                            <h3>We always come over for a check-up after sale.</h3>
                        </motion.li>
                        <motion.li initial={{ translateX: 50, opacity: 0 }}
                            whileInView={{ translateX: 0, opacity: 1 }}
                            viewport={{ once: true }} 
                            transition={{ duration: 0.6, type: 'spring', bounce: 0.7, delay: 2.8 }}>
                            <i class="ri-chat-check-fill"></i>
                            <h3>100% money back guaranteed.</h3>
                        </motion.li>
                    </ul>
                </div>
                <motion.div initial={{ translateY: 50, opacity: 0 }}
                            whileInView={{ translateY: 0, opacity: 1 }}
                            viewport={{ once: true }} 
                            transition={{ duration: 0.6, type: 'spring', bounce: 0.7, delay: 3 }} className="container-link">
                    <a href="#Products">Shop Now<i class="ri-arrow-right-down-fill"></i></a>
                </motion.div>
            </div>
        </article>
    </section>
  )
}

export default About