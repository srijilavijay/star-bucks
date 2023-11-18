import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Banner2_2() {
  return (
    <div>
      <Container className='mt-4'>
            <Row style={{backgroundColor:"rgba(0,98,65,255)",color:"white", textAlign:"center"}}>
                 <Col style={{paddingTop:"80px",margin:"80px"}}>
                    <h1>Let’s celebrate</h1>
                    <p>Your holi-yay favorites are here. Pick up a Peppermint Mocha, Iced Sugar Cookie Almondmilk Latte or Caramel Brulée Latte.</p>
                    <Button variant="outline-light" style={{borderRadius:"1.5rem"}}>Find your favorite</Button>
                 </Col>
                 <Col className='m-0 p-0'>
                    <img className="bannerImg1" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87323.png"/>
                 </Col>
            </Row>
      </Container>
    </div>
  )
}

export default Banner2_2