import React from "react"
import { navigate } from "gatsby"

import { isLoggedIn } from "../../services/auth"

const PrivateRouteCalendar = ({ component: Component, location, ...rest }) => {
    if (!isLoggedIn() && location.pathname !== `/calendar/LoginCalendar`) {
        navigate("/calendar/loginCalendar")
        return null
    }
    return <Component {...rest} />
}
export default PrivateRouteCalendar;