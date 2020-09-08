import React from 'react';
import {Router} from '@reach/router';
import Layout from "../components/layout";

import loadable from '@loadable/component'
import SEO from "../components/seo";

const Login = loadable(() => import("../components/app/Login"))
const PrivateRoute = loadable(() => import("../components/app/PrivateRoute"))
const Account = loadable(() => import("../components/app/Account"))

const App = () => (
    <Layout>
        <SEO title="App" />
        <Router>
            <PrivateRoute component={Account} path="/app/account"/>
            <Login path="/app/login"/>
        </Router>
    </Layout>
)
export default App;