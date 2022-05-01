import React from 'react'
import './products.css'
import Product1 from '../../assets/img/product1.png'
import Product2 from '../../assets/img/product2.png'
import Product3 from '../../assets/img/product3.png'
import Product4 from '../../assets/img/product4.png'
import Product5 from '../../assets/img/product5.png'
import Product6 from '../../assets/img/product6.png'
import Card1 from '../../assets/img/card1.png'
import Card2 from '../../assets/img/card2.png'
import Card3 from '../../assets/img/card3.png'
import Card4 from '../../assets/img/card4.png'
import { motion } from 'framer-motion'

const OnClick = () => {
    const btnFlecha = document.querySelector('.ri-arrow-down-s-line');
    const conCards = document.querySelector('.tarjetas');
    const tarjeta1 = document.querySelector('.card1');
    const tarjeta2 = document.querySelector('.card2');
    const tarjeta3 = document.querySelector('.card3');
    const tarjeta4 = document.querySelector('.card4');

    btnFlecha.classList.toggle("rotate")
    conCards.classList.toggle("show")
    tarjeta1.classList.toggle("appear")
    tarjeta2.classList.toggle("appear")
    tarjeta3.classList.toggle("appear")
    tarjeta4.classList.toggle("appear")
}

const Tarjeta1 = () => {
    const tarjeta1 = document.querySelector('.card1');
    const tarjeta2 = document.querySelector('.card2');
    const tarjeta3 = document.querySelector('.card3');
    const tarjeta4 = document.querySelector('.card4');

    tarjeta1.classList.toggle("border")
    tarjeta2.classList.remove("border")
    tarjeta3.classList.remove("border")
    tarjeta4.classList.remove("border")
}

const Tarjeta2 = () => {
    const tarjeta1 = document.querySelector('.card1');
    const tarjeta2 = document.querySelector('.card2');
    const tarjeta3 = document.querySelector('.card3');
    const tarjeta4 = document.querySelector('.card4');

    tarjeta1.classList.remove("border")
    tarjeta2.classList.toggle("border")
    tarjeta3.classList.remove("border")
    tarjeta4.classList.remove("border")
}

const Tarjeta3 = () => {
    const tarjeta1 = document.querySelector('.card1');
    const tarjeta2 = document.querySelector('.card2');
    const tarjeta3 = document.querySelector('.card3');
    const tarjeta4 = document.querySelector('.card4');

    tarjeta1.classList.remove("border")
    tarjeta2.classList.remove("border")
    tarjeta3.classList.toggle("border")
    tarjeta4.classList.remove("border")
}

const Tarjeta4 = () => {
    const tarjeta1 = document.querySelector('.card1');
    const tarjeta2 = document.querySelector('.card2');
    const tarjeta3 = document.querySelector('.card3');
    const tarjeta4 = document.querySelector('.card4');

    tarjeta1.classList.remove("border")
    tarjeta2.classList.remove("border")
    tarjeta3.classList.remove("border")
    tarjeta4.classList.toggle("border")
}

const OpenBuyCart = () => {
    const open = document.querySelector('.container-buy');
    open.classList.toggle("show")
}

const CloseBuyCart = () => {
    const close = document.querySelector('.container-buy');
    close.classList.remove("show")
}

const BuyBtn = () => {
    const title = document.querySelector('.title')
    const price = document.querySelector('.price')
    const containerCards = document.querySelector('.tarjetas')
    const buyed = document.querySelector('.comprado')

    title.classList.toggle("disable")
    price.classList.toggle("disable")
    containerCards.classList.toggle("disable")
    buyed.classList.toggle("show")
}

const data = [
    {
        imagen: Product1,
        nombre: 'Cacti Plant',
        precio: '$19.99'
    },
    {
        imagen: Product2,
        nombre: 'Cactus Plant',
        precio: '$20.99'
    },
    {
        imagen: Product3,
        nombre: 'Aloe Vera Plant',
        precio: '$7.99'
    },
    {
        imagen: Product4,
        nombre: 'Succulent Plant',
        precio: '$5.99'
    },
    {
        imagen: Product5,
        nombre: 'Spino Plant',
        precio: '$10.99'
    },
    {
        imagen: Product6,
        nombre: 'Green Plant',
        precio: '$12.99'
    },
]

const Products = () => {
  return (
    <section className="section-products" id='Products'>
        <div className="container-products">
            <motion.div initial={{ translateY: -100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.6, delay: 1.2 }}
            viewport={{ once: true }} 
            className="container-title">
                <h1><i class="ri-plant-fill"></i>Our Products<i class="ri-plant-fill"></i></h1>
            </motion.div>
            <div className="container-items">
                <div className="container-align">
                    {
                        data.map(({imagen, nombre, precio}, index) => {
                            return(
                                <motion.div initial={{ translateY: -10, opacity: 0 }}
                                whileInView={{ translateY: 0, opacity: 1 }}
                                viewport={{ once: true }} 
                                transition={{ duration: 0.8, type: 'spring', bounce: 0.6, delay: 1.6 }}
                                 key={index} className="item">
                                    <img className='item-img' src={imagen} alt="" />
                                    <h2 className='item-title'>{nombre}</h2>
                                    <h3 className='item-precio'>{precio}</h3>
                                    <motion.div initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1 }} className="container-bag">
                                        <i onClick={OpenBuyCart} class="ri-shopping-bag-line"></i>
                                    </motion.div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="container-buy-cart">
                {
                    data.map(({imagen, nombre, precio}, index) => {
                        return(
                                <div key={index} className="container-buy">
                                    <img src={imagen} alt="" />
                                    <h2 className='title'>{nombre}</h2>
                                    <h3 className='price'>{precio}</h3>
                                    <div className='tarjetas'>
                                        <i onClick={OnClick} class="ri-arrow-down-s-line"></i>
                                        <div className="container-cards">
                                            <img onClick={Tarjeta1} className='card1' src={Card1} alt="" />
                                            <img onClick={Tarjeta2} className='card2' src={Card2} alt="" />
                                            <img onClick={Tarjeta3} className='card3' src={Card3} alt="" />
                                            <img onClick={Tarjeta4} className='card4' src={Card4} alt="" />
                                        </div>
                                    </div>
                                    <motion.button onClick={BuyBtn} initial={{ scale: 1 }}
                                    whileTap={{ scale: 0.9 }} className='btn-compra'>
                                        Comprar
                                    </motion.button>
                                    <div className="container-close">
                                        <i onClick={CloseBuyCart} class="ri-close-fill"></i>
                                    </div>
                                    <h4 className='comprado'>Comprado!</h4>
                                </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Products