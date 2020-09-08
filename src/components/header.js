import PropTypes from "prop-types"
import React, {useState} from 'react';
import "../../assets/styles/header.scss"
import {graphql, Link} from "gatsby";
import "./../../assets/styles/mobile.scss"
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';

const Header = ({data, motto}) => {

    const leaderPages = data.allStrapiLeaderPage.edges

    console.log(leaderPages)

    console.log(motto)

    const links = [{
        path: "/about",
        title: "O nas"
    }, {
        path: "/publiccalendar",
        title: "Kalendarz Publiczny"
    }, {
        path: "/calendar/calendarauth",
        title: "Kalendarz "
    }, {
        path: "/app/account",
        title: "Konto"
    }, {
        path: "https://www.facebook.com/groups/1759332444171219",
        title: "Blog"
    }, {
        path: "/materials/materialsauth",
        title: "Materiały"
    }]

    const [visible, setVisible] = useState(false)
    const toggle = () => setVisible(!visible)


    return (
        <>
            <div onClick={toggle}
                 className={!visible ? "hamburger-icon active" : "hamburger-icon"}
                 src="/bars-solid.svg">
                <div/>
                <div/>
                <div/>

            </div>
            <div className={visible ? "mobile-menu active" : "mobile-menu"}>
                <ul>
                    {leaderPages.map(leader => {
                            console.log(leader)
                            return <Link className="link" to={`/${leader.node.imie}-${leader.node.nazwisko}`}
                                         activeClassName="link">{`${leader.node.imie}-${leader.node.nazwisko}`}</Link>

                        }
                    )}
                    {links.map(l => {
                        const {title, path} = l;
                        return (
                            <Link onClick={toggle} className="link" to={path}>{title}</Link>
                        )
                    })}
                </ul>
            </div>
            <header className="header"
                    data-sal="fade"
                    data-sal-delay="50"
                    data-sal-easing="ease"
                    data-sal-duration="400">
                <nav className="nav"
                     data-sal="slide-up"
                     data-sal-delay="300"
                     data-sal-easing="ease"
                     data-sal-duration="300">
                    <li style={{marginBottom: "0px"}}>
                        <img alt="logo" style={{width: "50px"}}
                             src="/images/logo.png"/>
                    </li>
                    <UncontrolledDropdown>
                        <DropdownToggle nav caret className="link">
                            Liderzy
                        </DropdownToggle>
                        <DropdownMenu right>
                            {leaderPages.map(leader => {
                                    console.log(leader)
                                    return <DropdownItem>
                                        <Link className="link" to={`/${leader.node.imie}-${leader.node.nazwisko}`}
                                              activeClassName="link">{`${leader.node.imie}-${leader.node.nazwisko}`}</Link>
                                    </DropdownItem>
                                }
                            )}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    {links.map(l => {
                        const {title, path} = l;
                        return (
                            <Link className="link" to={path} activeClassName="link-active">{title}</Link>
                        )
                    })}
                </nav>
                <div className="motto">
                    {motto ? motto : "Czy jesteś w stanie wyobrazić sobie, że jesteś zdrowym,pełnym energii, bogatym stulatkiem?"}
                </div>
            </header>
        </>
    )
}

export const query = graphql`
    query MyQuery {
      allStrapiLeaderPage {
        edges {
          node {
            imie
            nazwisko
          }
        }
      }
    }
`

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
