import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import './Banner2_1.css'

function Banner2_1() {

  return (
    <div>
        <Container  className='mt-4'>
            <Row className='bannerRow1' style={{backgroundColor:"rgba(239,51,64,255)",color:"white", textAlign:"center"}}>
                 <Col style={{padding:"0px", marginLeft:"0px"}}>
                    <img className="bannerImg1" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87320.jpg"/>
                 </Col>
                 <Col style={{paddingTop:"40px",margin:"60px"}}>
                 <h5>Festivity at your fingertips</h5>
                 <p>Make the season even brighter when you join Starbucks® Rewards. You’ll save time with easy mobile ordering and earn free favorites.*</p>
                 <Button variant="outline-light" style={{borderRadius:"1.5rem"}}>Join for Free</Button>
                 </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner2_1