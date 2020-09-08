import React from "react"
import Layout from "../components/layout";
import {Container, Row} from "reactstrap"
import SEO from "../components/seo";
import Title from "../components/utilityComponents/Title";
import Baner from "../components/utilityComponents/Baner";
import GoToUs from "../components/GoToUs";
import Facebook from "../components/Facebook";

const ReactMarkdown = require('react-markdown')

export default (data) => {

    console.log(data.pageContext)
    const {title, tekst, imie, nazwisko, obraz,motto} = data.pageContext;
    const fullname = `${imie} ${nazwisko}`
    console.log(obraz)
    return (
        <Layout motto={motto}>
            <SEO title="Główna"/>
            <Container fluid className="p-0">
                <Row>
                    <Title color={"#4caf50"} text={fullname}/>
                </Row>
                <Baner src={obraz} text={tekst}/>
                <GoToUs/>

                <Facebook/>

            </Container>
        </Layout>
    )
}