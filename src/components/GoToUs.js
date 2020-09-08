import React from "react"

import {Link} from "gatsby"
import "../../assets/styles/index.scss"
import styled from 'styled-components';



const GoToUs = () => (

    <div className="baner">
        <Link
            className="btn-road"
            to="/about"
        >
            Dowiedz się więcej...
        </Link>
    </div>

)

export default GoToUs