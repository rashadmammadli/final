import React from 'react'

import './banner.css'

import { Container, Row, Col } from 'reactstrap'
import {motion} from 'framer-motion'

import Banner1 from '../assets/images/banner1.webp'
import Banner2 from '../assets/images/banner2.webp'
import Banner3 from '../assets/images/banner3.webp'
import Banner4 from '../assets/images/banner4.webp'

const year = new Date().getFullYear()

const Banner = () => {
  return (
    <section className="banner">
        <Container>
            <Row>
                <Col lg='5' md='12'>
                    <div className="banner__item">
                        <div className="banner__image">
                            <motion.img whileHover={{ scale: 1.07 }} src={Banner1} alt="" />
                        </div>

                        <div className="banner__content tr-right">
                            <h3>Creative <br /> Comfortable Chair</h3>
                        </div>
                    </div>
                </Col>

                <Col lg='7' md='12'>
                    <div className="banner__item">
                        <div className="banner__image">
                            <motion.img whileHover={{ scale: 1.07 }} src={Banner2} alt="" />
                        </div>

                        <div className="banner__content tr-right">
                            <h3>Stylish Divan <br /> Latest Collection</h3>
                        </div>
                    </div>
                </Col>

                <Col lg='7' md='12'>
                    <div className="banner__item">
                        <div className="banner__image">
                            <motion.img whileHover={{ scale: 1.07 }} src={Banner3} alt="" />
                        </div>

                        <div className="banner__content tl-left color-white">
                            <h3>{year}<br /> Bed Collections</h3>
                        </div>
                    </div>
                </Col>

                <Col lg='5' md='12'>
                    <div className="banner__item">
                        <div className="banner__image">
                            <motion.img whileHover={{ scale: 1.07 }} src={Banner4} alt="" />
                        </div>

                        <div className="banner__content tl-left">
                            <h3>TV Cabinet<br /> New Arrivals</h3>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner