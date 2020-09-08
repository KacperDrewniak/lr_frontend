import React from "react"
import {navigate} from "@reach/router"
import {getUser, logout} from '../../services/auth'
import {Button, Jumbotron} from 'reactstrap';


export default () => {
    const gatsbyUser = getUser()

    return (
        <Jumbotron>
            Witaj {gatsbyUser.user.username}!
            Jesteś Zalogowany !
            <Button href="#" onClick={(e) => {
                e.preventDefault()
                logout(() => navigate('/'))
            }}>Logout</Button>
        </Jumbotron>
    );
}