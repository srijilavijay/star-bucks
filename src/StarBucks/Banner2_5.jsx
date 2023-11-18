import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Banner2_5() {
  return (
    <div>
      <Container className='mt-4'>
            <Row style={{backgroundColor:"rgba(30,57,50,255)",color:"white",  textAlign:"center"}}>
                 <Col className='m-0 p-0'>
                    <img className="bannerImg1" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87330.jpg"/>
                 </Col>
                 <Col style={{paddingTop:"80px",margin:"80px"}}>
                 <h1 className='pt-4' >Brew a cup of magic</h1>
                 <p>The blends you love are back, including Starbucks® Christmas Blend 2023 with rare aged Sumatra.</p>
                 <Button variant="outline-light" style={{borderRadius:"1.5rem"}}>Order now</Button>
                 </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner2_5