import React from "react"
import Layout from "../components/layout";
import {Jumbotron} from "reactstrap"

const ReactMarkdown = require('react-markdown')

export default (data) => {

    const {title, description} = data.pageContext;

    console.log(description)

    return (
        <Layout>
            <Jumbotron>
                <h1>{title.title}</h1>
                <h3>
                    <ReactMarkdown
                        source={description}
                        transformImageUri={u => `https://lrstrapi.burrow.io${u}`}
                    />
                </h3>
            </Jumbotron>
        </Layout>
    )
}