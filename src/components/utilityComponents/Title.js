import React from "react"
import styled from 'styled-components';

const Row = styled.div`
    display:flex;
    align-items:center;
    padding:20px;
`

const Box = styled.div`
    width:30px;
    height:30px;
    margin:10px;
`
const Text = styled.div`
    font-size:2rem;
`

const Title = ({color,text}) => (

    <Row>
        <Box style={{backgroundColor:color}}></Box>
        <Text>{text}</Text>
    </Row>
)

export default Title;