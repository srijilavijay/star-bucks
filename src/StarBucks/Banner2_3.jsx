import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Banner2_3() {
  return (
    <div>
      <Container className='mt-4'>
            <Row style={{backgroundColor:"rgba(179,118,151,255)",color:"white",  textAlign:"center"}}>
                 <Col className='m-0 p-0'>
                    <img className="bannerImg1" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87325.png"/>
                 </Col>
                 <Col style={{paddingTop:"80px",margin:"80px"}}>
                 <h1>Gingerbread meets chai</h1>
                 <p>Say hello to the festive new Iced Gingerbread Oatmilk Chai. It's the beloved flavor of gingerbread with a twist. Here for a limited time.</p>
                 <Button variant="outline-light" style={{borderRadius:"1.5rem"}}>Order now</Button>
                 </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner2_3