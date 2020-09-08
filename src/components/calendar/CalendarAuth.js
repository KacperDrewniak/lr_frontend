import React from "react"
import {getUser} from '../../services/auth'
import Title from "../utilityComponents/Title";
import {Col, Container, Row} from 'reactstrap';

export default () => {
    const gatsbyUser = getUser()

    return (
        <Container fluid>
            <Row><Title color={"yellowgreen"} text={"Kalendarz"}/></Row>
            <Row>
                <Col>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FWarsaw&amp;src=ZHJld25pYWtrYWNwZXI2QGdtYWlsLmNvbQ&amp;color=%23039BE5&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
                        width="100%" height="600" frameBorder="0" scrolling="no"/>
                </Col>
            </Row>
        </Container>
    );
}