import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

const S = {}

S.Container = styled.div`
    z-index: 100;
    width: 100%;
    height: 8vh;
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    right: 0px;
    font-family: 'DM Sans', sans-serif;

    left: 0px;
    font-weight: 400;
    font-style: normal;
    box-sizing: border-box;
    background-color: white;
    // display: none;

    @media (max-width: 768px) {
        padding: 0px 20px;
    }
    


    ul {
        font-size: 24px;
        width: 45%;
        display: flex;
        justify-content: space-around;
        // border: solid black 1px;

    
       
        @media (max-width: 768px) {
            font-size: 20px;
            justify-content: space-between;
            padding-left: 0px;
            width: 60%;
        }
        @media (max-width: 480px) {
            font-size: 14px;
            justify-content: space-between;
            padding-left: 0px;
            width: 60%;
        }


    }
`

S.HomeLink = styled(props => <Link {...props} />)`
    font-size: 55px;
    margin-left: 10px;
    // font-family: 'Gentium Basic', serif;
    font-family: 'DM Sans', sans-serif;

    color: black;
    text-decoration: none;


    @media (max-width: 1024px) {
        font-size: 48px;
        margin-left: 0px;
    }
    @media (max-width: 768px) {
        font-size: 27px;
        margin-left: 0px;
    }
`

S.NavLink = styled(props => <Link {...props} />)`
    margin: 0px;
    padding: 0px;
    color: black;
    text-decoration: none;
`

const Nav = () => (
    <S.Container>
        <S.HomeLink to = "/">VLAD</S.HomeLink>
        <ul>
            <S.NavLink to = "/journal">journal</S.NavLink>
            <S.NavLink to = "/portfolio">portfolio</S.NavLink>
            <S.NavLink to = "/contact">contact</S.NavLink>
        </ul>
        
    </S.Container>
)


export default Nav;