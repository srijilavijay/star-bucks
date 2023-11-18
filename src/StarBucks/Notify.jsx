import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Notify() {
  return (
    <div>
       <Container className='mt-4' style={{textAlign:"center"}}>
            <Row>
                <Col>
                <p>*At participating stores. Some restrictions apply. See https://www.starbucks.com/rewards for details.</p>
                </Col>
            </Row>
       </Container>
    </div>
  )
}

export default Notify