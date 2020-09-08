import React from 'react';
import "../../assets/styles/header.scss"
import styled from 'styled-components';
import {Link} from "gatsby";
import {Col, Container, Row} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhoneVolume} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    const links = [{
        path: "/",
        title: "Home"
    }, {
        path: "/about",
        title: "O nas"
    }, {
        path: "/publiccalendar",
        title: "Kalendarz Publiczny"
    }, {
        path: "/calendar/calendarauth",
        title: "Kalendarz "
    }, {
        path: "/app/account",
        title: "Konto"
    }, {
        path: "/blog/blogauth",
        title: "Blog"
    }, {
        path: "/materials/materialsauth",
        title: "Materiały"
    }]

    const Footer = styled.footer`
    background-color:#4caf50;
    padding:10px;
    margin-top:100px;
    *{
    color:black ;
    }
    `
    const List = styled.ul`
        list-style-type:none;
        text-align:center;
        margin:0 auto;
        li{
        display:inline-block
        }
        li a{
        padding:20px;
        color:black;
        transition:.3s;
            &:hover{
               text-decoration:none;
               color:green;
               padding-left:20px;
                }
        }
       
    `


    return (
        <Footer id="footer">
            <Container>
                <Row className="p-3" style={{textAlign: "center"}}>
                    <List>

                        {links.map((l, i) => {
                            const {title, path} = l;
                            return (
                                <li>
                                    <Link to={path}>{title}</Link>
                                </li>
                            )
                        })}
                    </List>
                </Row>
                <Row className="p-2" style={{textAlign: "center"}}>
                    <Col>
                        <div style={{color: "black"}}><FontAwesomeIcon icon={faPhoneVolume}/> +48 123 456 789</div>
                    </Col>
                </Row>
                <Row className="p-2" style={{textAlign: "center"}}>
                    <Col>
                        <div style={{color: "black"}}><FontAwesomeIcon icon={faEnvelope}/> Koncepcja@gmail.com</div>
                    </Col>
                </Row>
            </Container>
        </Footer>
    )
}


export default Footer
