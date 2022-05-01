import React from 'react'
import './contact.css'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className="section-contact" id='Contact'>
        <div className="container-contact">
            <div className="container-info">
                <motion.h1 initial={{ translateX: -100, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: 'spring', bounce: 0.7, delay: 0.8 }}
                viewport={{ once: true }} >Reach out to us today <br />via any of the given <br />information</motion.h1>
                <motion.div initial={{ translateX: -100, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: 'spring', bounce: 0.7, delay: 1 }}
                viewport={{ once: true }} className="container-item">
                    <h2>Call us for instant support</h2>
                    <i class="ri-phone-line"></i>
                    <h3>+5491144489123</h3>
                </motion.div>
                <motion.div initial={{ translateX: -100, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: 'spring', bounce: 0.7, delay: 1.2 }}
                viewport={{ once: true }} className="container-item">
                    <h2>Write us by mail</h2>
                    <i class="ri-mail-send-line"></i>
                    <h3>support@gmail.com</h3>
                </motion.div>
            </div>
            <form autoComplete='on' className="form-contact">
                <motion.input initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 300, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.7, delay: 1.4 }}
                viewport={{ once: true }} placeholder='Name' type='text' />
                <motion.input initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 300, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.7, delay: 1.8 }}
                viewport={{ once: true }} placeholder='Email' type='email' />
                <motion.input initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 300, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.7, delay: 2.2 }}
                viewport={{ once: true }} placeholder='Message' type="text" />
                <motion.button initial={{ translateX: 100, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.7, delay: 2.6 }}
                viewport={{ once: true }}>
                    Send Message
                    <i class="ri-arrow-right-down-line"></i>
                </motion.button>
            </form>
        </div>
    </section>
  )
}

export default Contact