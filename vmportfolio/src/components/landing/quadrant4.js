import React from "react";
import styled from "styled-components";
import instagramPng from "../../images/025-instagram.png"
import githubPng from "../../images/038-github.png"
import twitterPng from "../../images/043-twitter.png"

const S = {};

S.Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0px 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // border: solid black 1px;
    margin-top: 10vh;
    
    @media (max-width: 900px) {
        padding: 0px 60px;
    }

    @media (max-width: 768px) {
        padding: 0px 40px;
    }
    @media (max-width: 480px) {
        padding: 0px 20px;
    }

    h2 {
        font-size: 72px;
        margin: 10% 0px 1% 0px;
        font-family: 'Gentium Basic', serif;

        
        @media (max-width: 1024px) {
            font-size: 48px;
        }
        @media (max-width: 768px) {
            font-size: 48px;
        }
        @media (max-width: 480px) {
            font-size: 48px;
        }
    }

    ul {
        list-style-type: none;
        width: 100%;
        padding: 0px;

        li {
            font-size: 36px;
            text-align: left;
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            @media (max-width: 1024px) {
                font-size: 24px;
            }
            @media (max-width: 768px) {
                font-size: 24px;
            }
            @media (max-width: 480px) {
                font-size: 24px;
            }

            span {
                margin-left: 3%;
            }
        }
    }

    img {
        height: 70px;
        width: 70px;

        @media (max-width: 768px) {
            height: 54px;
            width: 54px;
        }
        @media (max-width: 480px) {
            height: 54px;
            width: 54px;
        }
    }
`

S.Placeholder = styled.div`
    width: 70px;
    height: 70px;
`



const Quadrant4 = (props) => (
    <S.Container>
        <h2>CONTACT</h2>
        <ul>
            <li>
                <S.Placeholder />
                <span>vladmog@gmail.com</span>
            </li>
            <li>
                <img src = {instagramPng} />
                <span>lightcatch</span>
            </li>
            <li>
                <img src = {githubPng} />
                <span>vladmog</span>
            </li>
            <li>
                <img src = {twitterPng} />
                <span>vladeeo</span>
            </li>
        </ul>
    </S.Container>
)


export default Quadrant4;