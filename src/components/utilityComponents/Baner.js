import React from "react"
import styled from 'styled-components';
import "./../../../assets/styles/header.scss"
import Img from 'gatsby'

const _Baner = styled.div``


const Text = styled.div`
     flex-basis:60%;
     padding:20px;
     font-size:1rem;
     color:white;
     margin:auto;
       @media (max-width:1024px){
      flex-basis:30%;
      height:1000px;
    }
`

const Baner = ({text, src}) => {


    return (
        <_Baner id="baner_text">
            <div id="image"/>
            <Text id="text">{text}</Text>
        </_Baner>
    )
}
export default Baner