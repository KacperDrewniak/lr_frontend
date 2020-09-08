import React from "react"
import Layout from "../components/layout"
import loadable from '@loadable/component'
import SEO from "../components/seo";

const Title = loadable(() => import("../components/utilityComponents/Title"))
const TextAboutUs = loadable(() => import("../components/TextAboutUs"))

const About = () => (

    <Layout>
        <SEO title="O nas" />
        <article>
            <Title color={"#4caf50"} text={"O nas..."}/>
            <TextAboutUs/>
        </article>
    </Layout>
)

export default About