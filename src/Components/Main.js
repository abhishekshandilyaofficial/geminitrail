import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
function Main() {
    return (
        <div className='container-fluid' id="main">
            <div className='row'>
                <div className='row'>
                    <p className='mt-5 '>Find Existing Prtner ID</p>
                    <div className='col-lg-5'>
                        <Form className='text-start w-50'>
                            <Form.Label>Dealer Email*</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form>
                    </div>
                    <div className='col-lg-5 '>
                        <Form className='text-start w-50'>
                            <Form.Label >Dealer Phone Number</Form.Label>
                            <Form.Control type="email" placeholder="Phone No" />
                        </Form>
                    </div>
                    <div className='col-lg-5'>
                        <Form className='text-start w-50'>
                            <Form.Label>Partner ID</Form.Label>
                            <Form.Control type="email" placeholder="Partner ID" />
                        </Form>
                    </div>
                </div>
                <div className='row  mt-5'>
                    <div className='col mt-5 '>
                        <Button variant="white" size="sm">Back</Button>
                        <Button variant="danger" size="sm">Next</Button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Card border="success" style={{ width: '15rem', height: '12rem'}}>
                        <Card.Header className='text-white text-center' id="partner-message">Partner Messaging and Status</Card.Header>
                        <Card.Body>
                            <Card.Title>Start a new chat</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Main