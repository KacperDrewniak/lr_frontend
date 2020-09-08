import React from "react"
import Layout from "../components/layout"
import {Router} from "@reach/router";

import loadable from '@loadable/component'
import SEO from "../components/seo";

const LoginMaterials = loadable(() => import("../components/materials/LoginMaterials"))
const PrivateRouteMaterials = loadable(() => import("../components/materials/PrivateRouteMaterials"))
const MaterialsAuth = loadable(() => import("../components/materials/MaterialsAuth"))


const Materials = () => (
    <Layout>
        <SEO title="Materiały" />
        <Router>
            <PrivateRouteMaterials component={MaterialsAuth} path="/materials/materialsauth"/>
            <LoginMaterials path="/materials/loginMaterials"/>
        </Router>
    </Layout>
)

export default Materials