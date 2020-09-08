import React from "react"
import { navigate } from "gatsby"

import { isLoggedIn } from "../../services/auth"

const PrivateRouteMaterials = ({ component: Component, location, ...rest }) => {
    if (!isLoggedIn() && location.pathname !== `/materials/loginMaterials`) {
        navigate("/materials/loginMaterials")
        return null
    }
    return <Component {...rest} />
}
export default PrivateRouteMaterials;