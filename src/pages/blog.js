import React from "react"
import Layout from "../components/layout"
import {Container, Row} from "reactstrap";
import Title from "../components/utilityComponents/Title";


const Blog = () => (
    <Layout>
        <Container fluid>
            <Row>
                <Title color={"yellowgreen"} text={"Blog"}/>
            </Row>
        </Container>
    </Layout>
)

export default Blog;