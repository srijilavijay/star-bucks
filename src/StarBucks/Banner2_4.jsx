import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Banner2_4() {
  return (
    <div>
      <Container className='mt-4'>
            <Row style={{backgroundColor:"rgba(118,35,47,255)",color:"white",  textAlign:"center"}}>
                 <Col style={{paddingTop:"80px",margin:"80px"}}>
                    <h1>Nicely spiced</h1>
                    <p>Our Gingerbread Loaf with citrusy icing pairs deliciously with coffee.</p>
                    <Button variant="outline-light" style={{borderRadius:"1.5rem"}}>Order now</Button>
                 </Col>
                 <Col className='m-0 p-0'>
                    <img className="bannerImg1" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87328.jpg"/>
                 </Col>
            </Row>
      </Container>
    </div>
  )
}

export default Banner2_4