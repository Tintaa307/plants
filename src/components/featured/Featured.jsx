import React from 'react'
import './featured.css'
import { motion } from 'framer-motion'

const OnClick = () => {
  const contendor = document.querySelector('.item')
  const titulo = document.querySelector('.title')
  const texto = document.querySelector('.text')
  const icon = document.querySelector('.ri-add-line')

  contendor.classList.toggle("show")
  titulo.classList.toggle("change")
  texto.classList.toggle("appear")
  icon.classList.toggle("rotate")
}

const data = [
  {
    pregunta: 'My flowers are falling off or dying?',
    respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus error deleniti eum tempora consequatur corporis reprehenderit?'
  },
  {
    pregunta: 'How do i choose a plant?',
    respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus error deleniti eum tempora consequatur corporis reprehenderit?'
  },
  {
    pregunta: 'What causes leaves to become pale?',
    respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus error deleniti eum tempora consequatur corporis reprehenderit?'
  },
  {
    pregunta: 'How do i change pots?',
    respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus error deleniti eum tempora consequatur corporis reprehenderit?'
  },
  {
    pregunta: 'What causes brown crispy leaves?',
    respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus error deleniti eum tempora consequatur corporis reprehenderit?'
  },
  {
    pregunta: 'Why are gnats flying around my plant?',
    respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus error deleniti eum tempora consequatur corporis reprehenderit?'
  },
]

const Featured = () => {
  return (
    <section className="section-FAQS" id='FAQs'>
        <div className="container-FAQS">
          <div className="container-title">
            <motion.h1 initial={{ translateX: -100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.7, delay: 1 }}
            viewport={{ once: true }} >Some common questions <br /> we ofeten asked</motion.h1>
          </div>
          <article className="container-questions">
            <div className="container-items">
              {
                data.map(({pregunta, respuesta}, index) => {
                  return(
                      <motion.div initial={{ translateY: 50, opacity: 0 }}
                      whileInView={{ translateY: 0, opacity: 1 }}
                      transition={{ duration: 0.4, type: 'spring', bounce: 0.7, delay: 1.4 }}
                      viewport={{ once: true }} key={index} className='item'>
                        <i onClick={OnClick} className="ri-add-line"></i>
                        <h3 className='title'>{pregunta}</h3>
                        <p className='text'>
                          {
                            respuesta
                          }
                        </p>
                      </motion.div>
                  )
                })
              }
            </div>
          </article>
        </div>
    </section>
  )
}

export default Featured