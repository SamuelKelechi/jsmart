import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../Assets/logo1.png'

const Header = ({ menuOpen, setMenuOpen }) => {

    const handleClick = () => setMenuOpen(!menuOpen);


  return (
    <HeaderContainer>
        <HeaderWrapper>
            <NavLinks to='/' ><LogoImg src={Logo}/></NavLinks>
            <Navs click={menuOpen} onClick={handleClick}>
                <NavLinks to='/' onClick={() => setMenuOpen(false)}>HOME</NavLinks>
                <NavLinks to='/about' onClick={() => setMenuOpen(false)}>ABOUT US</NavLinks>
                <NavLinks to='/menu' onClick={() => setMenuOpen(false)}>MENU</NavLinks>
                <NavLinks to='/events' onClick={() => setMenuOpen(false)}>EVENTS</NavLinks>
                <NavLinks to='/contact' onClick={() => setMenuOpen(false)}>CONTACT US</NavLinks>
                
            </Navs>
            <MobileIcon onClick={handleClick}>
                    {menuOpen ? <FaTimes /> :  <FaBars />}
            </MobileIcon>
        </HeaderWrapper> 
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 80px;
box-shadow: 0px 4px 4px 4px rgba(225, 225, 225, 0.5);
z-index: 999;
position: fixed;
color: white;
top: 0;
background-color: rgba(9,5,5,0.8);
backdrop-filter: blur(1rem);

@media screen and (max-width: 425px){
    position: fixed;
    top:0;
}
`
const HeaderWrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
const LogoImg = styled.img`
width: 100px;
margin-top: 15px;

@media screen and (max-width: 425px){
    width: 80px;
}
`
const Navs = styled.div`
display: flex;
width: 600px;
justify-content: space-between;
align-items: center;
font-size: 18px;
font-weight: bold;

@media screen and (max-width: 860px){
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 87px;
    height: 70vh;
    width: 100%;
    justify-content: space-evenly;
    left: ${({click}) => (click ? 0 : '-100%')};
    transition: all 0.8s ease;
    opacity: 0.93;
    background-color: rgba(9,5,5,0.9);
    color: white;
    z-index: 900;
    border-radius: 0 25px 25px 0;
}
`
const NavLinks = styled(Link)`
        text-decoration: none;
        color: inherit;
        border-bottom: 2px solid transparent; 
        display: flex;
        justify-content: center;
        cursor: pointer;

    &:hover{
        border-bottom: 2px solid white; 
        transition: all 2s ease;
    }

    @media screen and (max-width: 860px){
        border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 2px solid whitesmoke; 
        transition: all 4s ease;
    }

    }
`

const MobileIcon = styled.div`
font-size: 30px;
display: none;
color: white;

@media screen and (max-width: 860px){
display: flex                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ;
}
`