import React,{ useState, useEffect} from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../assets/data/products'

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import ProductList from '../components/UI/ProductList'

import Banner from '../banner/Banner'
import Clock from '../components/UI/Clock'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'


import counterImg from '../assets/images/counter-timer-img.png'

const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear()

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(
      item=> item.category === 'chair'
      )

    const filteredBestSalesProducts = products.filter(
      item=> item.category === 'sofa'
      )

      const filteredMobileProducts = products.filter(
        item=> item.category === 'mobile'
        )

        const filteredWirelessProducts = products.filter(
          item=> item.category === 'wireless'
          )

          const filteredPopularProducts = products.filter(
            item=> item.category === 'watch'
            )

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)
  },[])

  return (
    <Helmet title={"Home"}>

      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2> Creative Design <br/> Modern & Exclusive Furniture </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nobis ducimus repudiandae, pariatur ab iusto dolor dolorem non neque reprehenderit!</p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>

            <Col lg='6' md='6' >
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col> 
          </Row>
        </Container>
      </section>

      <Banner />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best-sales">
         <Container>
         <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Best Sales</h2>
            </Col>

            <ProductList data={bestSalesProducts}/>
          </Row>
         </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count__down-col'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button whileTap={{scale:1.2}} className="but__btn store__btn mt-2"><Link to='/shop'>Visit Store</Link></motion.button>
            </Col>

            <Col lg='6' md='12' className='text-end counter__img'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts}/>
            <ProductList data={wirelessProducts}/>
          </Row>
        </Container>
      </section>

      <section className="popular__category">
      <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section__title">Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts}/>
          </Row>
        </Container>
      </section>

      <section className="newsletter__section section bg-gray-two pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-95 pb-lg-75 pb-md-65 pb-sm-60 pb-xs-50">
        <Container>
          <Row className='align-items-center'>
            <Col lg='6'>
              <div className="newsletter__content">
                <h2>Subscribe Our Newsletter</h2>
                <p>Subscribe Today for free and save 10% on your first purchase.</p>
              </div>
            </Col>

            <Col lg='6'>
              <div className="newsletter__wrap">
                <div className="newsletter__form">
                  <form id='mc-form' className='mc-form' noValidate='true' action="">
                    <input type="email" placeholder='Enter Your Email Adress Here...' required name='EMAIL' />
                    <button type='submit' value='submit'>SUBSCRIBE!</button>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
    </Helmet>
  )
}

export default Home