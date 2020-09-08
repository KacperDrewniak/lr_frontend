import React, {useEffect} from "react"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/styles/index.scss'
import Title from "../components/utilityComponents/Title"
import Baner from "../components/utilityComponents/Baner"
import GoToUs from "../components/GoToUs";
import Facebook from "../components/Facebook"
import {Container, Row} from 'reactstrap';
import SEO from "../components/seo";

const IndexPage = () => {

    return (
        <Layout>
            <SEO title="Główna" />
            <Container fluid className="p-0">
                <Row>
                    <Title color={"#4caf50"} text={"Kim jesteśmy"}/>
                </Row>
                <Baner/>
                <GoToUs/>

                <Facebook/>

            </Container>
        </Layout>
    )
}

export default IndexPage

