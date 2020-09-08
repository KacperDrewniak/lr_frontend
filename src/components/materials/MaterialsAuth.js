import React, {useEffect, useState} from "react"
import "../../../assets/styles/materials.scss"
import {Card, CardBody, CardTitle, Col, Container, Row} from 'reactstrap';
import {Link} from "gatsby"

const ReactMarkdown = require('react-markdown')

const MaterialsAuth = () => {

    const [materials, setMaterials] = useState([]);

    function loadMaterials() {
        fetch('https://lrstrapi.burrow.io/materials/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMaterials(data)

            });
    }

    useEffect(() => loadMaterials(), [])
    return (
        <Container fluid>
            <Row>
                {
                    materials.map(material => {
                            const {Title} = material;

                            return (
                                <Col sm="2" className="m-2">
                                    <Card>
                                        <CardBody>
                                            <CardTitle>{Title}</CardTitle>
                                            <Link to={`/materials/Material_${material.id}`}>Przeczytaj
                                                więcej</Link>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        }
                    )
                }
            </Row>
        </Container>
    )
}

export default MaterialsAuth;