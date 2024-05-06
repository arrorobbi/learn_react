import React from 'react'
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap'

export default function ValorantPage() {
    const fetchData = async () =>{
        const result = await axios.get('https://staging.ina17.com/data.json')
        return result
      }
  return (
    <Container>
     <Row>
        <Col>Group 1</Col>
        <Col>Group 2</Col>
        <Col>Group 3</Col>
        <Col>Group 4</Col>
        <Col>Group 5</Col>
      </Row>
        {fetchData()}
    </Container>
  )
}
