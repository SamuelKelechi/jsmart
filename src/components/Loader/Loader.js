import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/logo1.png'
import ReactLoading from 'react-loading';

const Loader = ({ type, color }) => (
    <>
    <Main>
        <Avat src={logo} alt="Logo"/>
        <ReactLoading type={"balls"} color={"#f58634"} height={100} width={100} /> 
        
    </Main>
    </>
);

export default Loader;

const Main = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:rgb(21, 25, 32);
`

const Avat = styled.img`
    width: 200px;
    margin-bottom: -60px
`