import React from 'react'
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from'reactstrap';

const Tips = () => {
    return (
        <Container className="my-5">
            <div className="bg-primary text-white p-3 mb-4 text-center">
                <h2>Tips for Dealing with Floods</h2>
            </div>
            <Row>
                <Col md="4">
                    <Card className="h-100 shadow rounded">
                        <CardImg top src="https://i.pinimg.com/564x/ee/01/7c/ee017c280affb8adf90527978c5fd35c.jpg" alt="Before Flood" />
                        <CardBody>
                            <CardTitle tag="h4">Before a Flood</CardTitle>
                            <CardText>
                                <ul>
                                    <li><b>Stay Informed:</b> Monitor weather reports and flood warnings from local authorities.</li>
                                    <li><b>Create a Communication Plan:</b> Establish a family communication plan in case you are separated during a flood.</li>
                                    <li><b>Prepare an Emergency Kit:</b> Include essentials like water, non-perishable food, medications, and first aid supplies.</li>
                                    <li><b>Protect Your Home:</b> Use sandbags to prevent water from entering your home, and consider installing a sump pump.</li>
                                    <li><b>Elevate Utilities:</b> Raise electrical sockets, switches, and appliances above potential flood levels.</li>
                                    <li><b>Know Your Evacuation Routes:</b> Familiarize yourself with evacuation routes and have a plan for evacuation.</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card className="h-100 shadow rounded">
                        <CardImg top src="https://i.pinimg.com/564x/4a/af/26/4aaf260fd5ced2a80d25c8d8d8f2cfb0.jpg" alt="During Flood" />
                        <CardBody>
                            <CardTitle tag="h4">During Flood</CardTitle>
                            <CardText>
                                <ul>
                                <li><b>Stay Safe:</b> Avoid walking or driving through floodwaters. Just six inches of fast-flowing water can knock you over.</li>
                                <li><b>Move to Higher Ground:</b> If advised, move to a higher floor or the roof of your home to avoid rising waters.</li>
                                <li><b>Listen to Authorities:</b> Follow instructions from emergency services and evacuate if advised to do so.</li>
                                <li><b>Use Caution at Night:</b> Flood dangers are harder to recognize in the dark. Use a flashlight and be cautious.</li>
                                <li><b>Avoid Flooded Areas:</b> Stay away from flooded roads, bridges, and streams, as the water may be deeper or faster-moving than it appears.</li> 
                                <li><b>Turn Off Utilities:</b> Turn off gas, electricity, and water supplies if instructed to do so to prevent accidents.</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card className='h-100 shadow rounded'>
                        <CardImg top src='https://i.pinimg.com/564x/96/64/36/9664361253b3b99a7ff27a5e3ebc5c88.jpg' alt='After Flood'></CardImg>
                        <CardBody>
                            <CardTitle tag='h4'>After a Flood</CardTitle>
                            <CardText>
                                <ul>
                                    <li><b>Inspect Your Home:</b> Check for structural damage before entering, and beware of hazards like loose wires or gas leaks.</li>
                                    <li><b>Dispose of Contaminated Items:</b> Throw away food, cosmetics, and medicines that may have come into contact with floodwaters.</li>
                                    <li><b>Seek Support:</b>Reach out for support from family, friends, or counseling services if you're feeling overwhelmed.</li>
                                    <li><b>Clean and Disinfect:</b> Thoroughly clean and disinfect all surfaces that came into contact with floodwater.</li>
                                    <li><b>Dry Out Your Home:</b> Open windows, doors, and use fans to help dry out your home and prevent mold growth.</li>
                                    <li><b>Restore Utilities Safely:</b> Have professionals inspect and restore gas, electricity, and water services.</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md="12">
                    <Card className='h-100 shadoooow rounded text-center'>
                        <CardBody>
                            <CardTitle tag="h4">Additional Resources</CardTitle>
                            <CardText>
                                <strong>Emergency Hotlines:</strong>
                                <br />
                                - Flood Helpline: 1-800-123-456
                                <br />
                                - Emergency Services: 911
                            </CardText>
                            <Button color='primary' href='https://www.ready.gov/floods' target="_blank">Learn More About Floods</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Tips