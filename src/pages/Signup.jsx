import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import{ Link } from 'react-router-dom'

import '../styles/login.css'

const Signup = () => {
  return (
   <Helmet title="Sign up">
<section>
<Container>
      <Row>
        <Col lg='6' className='m-auto text-center'>
          <h3 className='fw-bold fs-4'>Sign Up</h3>

          <Form className='auth__form'>
            <FormGroup className='form__group'>
              <input type="text" placeholder='Username'/>
            </FormGroup>

            <FormGroup className='form__group'>
              <input type="email" placeholder='Email'/>
            </FormGroup>
            
            <FormGroup className='form__group'>
              <input type="password" placeholder='Password'/>
            </FormGroup>

            <button className="buy__btn auth__btn">Create an account</button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </Form>
        </Col>
      </Row>
    </Container>
</section>
   </Helmet>
  )
}

export default Signup