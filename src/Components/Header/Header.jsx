import React, { useState } from 'react'
import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {

    // State for the menu and cancel button to show
    const [toggle, setToggle] = useState(false);

    const showNavSide = () =>{
        setToggle(!toggle)
    }

    const removeNavSide = () =>{
        setToggle(false)
    }

  return (
    
        <Container>
            <Wrapper>
            <Logo>SYLVIE</Logo>
            <Navigation>
                <Nav>Home</Nav>
                <Nav>About</Nav>
                <Nav>Contact Us</Nav>
                <Nav>Services</Nav>
                <Nav>Portfolios</Nav>
            </Navigation>
            <Buttons>
                <Login>LOGIN</Login>
                <SignUp>SIGN UP</SignUp>
            </Buttons>
            </Wrapper>
           
           {/* For the menu and cancel button to show */}
            {
                toggle ?  <span onClick={removeNavSide}>x</span> :  
                <Hamburger  onClick={showNavSide}>
                <GiHamburgerMenu />
            </Hamburger> 
            }

            {/* For the navs to show on minimized screen */}
            {
                toggle ?  <NavSide>
                <Wrap>
                    <Nav>Home</Nav>
                    <Nav>About</Nav>
                    <Nav>Contact Us</Nav>
                    <Nav>Services</Nav>
                    <Nav>Portfolios</Nav>
                    <br />
                        <Login>LOGIN</Login>
                        <br />
                        <br />
                        <SignUp>SIGN UP</SignUp>
                </Wrap>
            </NavSide> : null
            }
        </Container>

  )
}

export default Header;

const Hamburger = styled.div`
    font-size: 30px;
    display: none;
    color: blue;
    cursor: pointer;
    @media screen and (max-width: 500px) {
        display: block;
    }
`;
const NavSide = styled.div`
    width: 100%;
    height: 85vh;
    position: absolute;
    top: 70px;
    @media screen and (max-width: 500px) {
        display: block;
    }
`;
const Wrap = styled.div`
    background-color: rgba(0, 0, 139, 0.747);
    backdrop-filter: blur(2px);
    width: 400px;
    height: 85vh;
    color: white;
    font-size: 20px;
    padding-top: 20px;
    border-radius: 0px 0px 5px 0px;
`;
const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: skyblue;
    color: white;
    z-index: 999;
    span{
        font-size: 70px;
        display: none;
        cursor: pointer;
        @media screen and (max-width: 500px) {
            display: block;
        }
    }
`;
const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
    cursor: pointer;
    font-size: 30px;
`;
const Navigation = styled.div`
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 500px) {
        display: none;
    }
`;
const Nav = styled.div`
    margin-right: 10px;
    cursor: pointer;
    @media screen and (max-width: 500px) {
        margin-bottom: 20px;
        border-top: 1px solid white;
        padding-left: 15px;
        display: flex;
        align-items: center;
    }
`;
const Buttons = styled.div`
    display: flex;
    @media screen and (max-width: 500px) {
        display: none;
    }
`;
const Login = styled.div`
    margin-right: 10px;
    cursor: pointer;
    background-color: #2a0b4b;
    padding: 10px 15px;
    border-radius: 5px;
    @media screen and (max-width: 500px) {
        width: 150px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const SignUp = styled.div`
    cursor: pointer;
    background-color: #2a0b4b;
    padding: 10px 15px;
    border-radius: 5px;
    @media screen and (max-width: 500px) {
        width: 150px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
