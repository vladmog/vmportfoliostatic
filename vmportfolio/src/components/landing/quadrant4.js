import React from "react";
import styled from "styled-components";
import instagramPng from "../../images/025-instagram.png"
import githubPng from "../../images/038-github.png"
import twitterPng from "../../images/043-twitter.png"
import mailSvg from "../../images/mail.svg"
import linkedinSvg from "../../images/linkedin.svg"

const S = {};

S.Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    // border: solid black 1px;
    margin-top: 10vh;
    // border: solid red 1px;
    min-height: 20vh;

    
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
        // border: solid red 1px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        li {
            font-size: 20px;
            text-align: left;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            // border: solid black 1px;
            // margin: 10px 40px;

            a {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: black;
                text-decoration: none;
                width: 70px;
            }

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
        // border: solid green 1px;

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
const contactInfo = [
    {
        name: "instagram",
        icon: instagramPng,
        handle: "lightcatch",
        url: "https://www.instagram.com/lightcatch/"
    },
    {
        name: "github",
        icon: githubPng,
        handle: "vladmog",
        url: "https://github.com/vladmog"
    },
    {
        name: "twitter",
        icon: twitterPng,
        handle: "vladeeo",
        url: "https://twitter.com/vladeeo"
    },
    {
        name: "linkedin",
        icon: linkedinSvg,
        handle: "vladmog",
        url: "https://www.linkedin.com/in/vladmog/"
    },
    {
        name: "email",
        icon: mailSvg,
        handle: "vladmog@gmail.com",
        url: "mailto:vladmog@gmail.com"
    }
]


const Quadrant4 = (props) => (
    <S.Container id = "stop3">
        {/* <h2>CONTACT</h2> */}
        <ul>
            {contactInfo.map((artifact) => {
                return (
                    <li key = {artifact.name} title = {artifact.handle}>
                        <a href = {artifact.url}>
                            <img src = {artifact.icon} />
                            {/* <span>{artifact.handle}</span> */}
                        </a>
                    </li>
                )
            })}
        </ul>
    </S.Container>
)


export default Quadrant4;