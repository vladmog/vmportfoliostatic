import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';


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

    // @media (max-width: 768px) {
    //     padding: 0px 20px;
    // }

    padding: 0px 100px;

    @media (max-width: 900px) {
        padding: 0px 60px;
    }
    
    @media (max-width: 768px) {
        padding: 0px 40px;
    }
    @media (max-width: 480px) {
        padding: 0px 20px;
    }
    


    ul {
        font-size: 24px;
        width: 45%;
        display: flex;
        justify-content: space-between;
        // border: solid black 1px;

        a {
            cursor: pointer;
        }

    
       
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

S.HomeLink = styled.a`
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


const HomeNav = (props) => (

    <S.Container>
        <S.HomeLink onClick={() => scrollTo('#stop0')}>VLAD</S.HomeLink>
        <ul>
            <a onClick={() => scrollTo('#stop1')}>journal</a>
            <a onClick={() => scrollTo('#stop2')}>portfolio</a>
            <a onClick={() => scrollTo('#stop3')}>contact</a>
        </ul>
    </S.Container>
  
)


export default HomeNav;