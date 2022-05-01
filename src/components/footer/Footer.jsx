import React from 'react'
import './footer.css'
import { motion } from 'framer-motion'
import Card1 from '../../assets/img/card1.png'
import Card2 from '../../assets/img/card2.png'
import Card3 from '../../assets/img/card3.png'
import Card4 from '../../assets/img/card4.png'

const Footer = () => {
  return (
    <section className="section-footer">
        <div className="container-footer">
            <div className="container-info-footer">
                <div className="container-item">
                    
                    <motion.h2 initial={{ translateY: 100, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 0.8 }}
                    ><i class="ri-plant-fill"></i>PLANTEX</motion.h2>
                    <motion.h3 initial={{ translateY: 100, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 1 }}
                    >Subscribe to our newsletter <br />to stay update</motion.h3>
                    <motion.div initial={{ translateY: 100, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 4 }} className="container-subscribe">
                        <input placeholder='Enter your email' type="email" />
                        <button>
                            Subscribe
                            <i class="ri-arrow-right-down-line"></i>
                        </button>
                    </motion.div>
                </div>
                <div className="container-item">
                    <motion.h2 initial={{ translateY: 100, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 1.2 }}>Our Address</motion.h2>
                    <ul className='data-list'>
                        <motion.li initial={{ translateY: 100, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 1.4 }}>
                            <h6>1234 - Poru</h6>
                        </motion.li>
                        <motion.li initial={{ translateY: 100, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 1.6 }}>
                            <h6>Libertador - 3009</h6>
                        </motion.li>
                        <motion.li initial={{ translateY: 100, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 1.8 }}>
                            <h6>123-456-789</h6>
                        </motion.li>
                    </ul>
                </div>
                <div className="container-item">
                    <motion.h2 initial={{ translateY: 100, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 2 }}
                    >Contact Us</motion.h2>
                    <motion.h6 initial={{ translateY: 100, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 2.2 }}
                    >+5491144489123</motion.h6>
                    <div className="container-redes">
                        <motion.i initial={{ translateY: 100, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 2.4 }} class="ri-facebook-fill"></motion.i>
                        <motion.i initial={{ translateY: 100, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 2.6 }} class="ri-instagram-line"></motion.i>
                        <motion.i initial={{ translateY: 100, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 2.8 }} class="ri-twitter-line"></motion.i>
                    </div>
                </div>
                <div className="container-item">
                    <motion.h2 initial={{ translateY: 100, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 3 }}
                    >We accept all <br />credits cards</motion.h2>
                    <div className="container-imgs">
                        <motion.img initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.9, type: 'spring', bounce: 0.7, delay: 3.2 }} src={Card1} alt="" />
                        <motion.img initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.9, type: 'spring', bounce: 0.7, delay: 3.4 }} src={Card2} alt="" />
                        <br />
                        <motion.img initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.9, type: 'spring', bounce: 0.7, delay: 3.6 }} src={Card3} alt="" />
                        <motion.img initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.9, type: 'spring', bounce: 0.7, delay: 3.8 }} src={Card4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer