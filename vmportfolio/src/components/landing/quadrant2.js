import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby"

import Entry from "./entry";

const S = {};

S.Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 100px;
    // border: solid green 1px;
    margin-top: 10vh;

    
    @media (max-width: 1024px) {
  
    }
    @media (max-width: 768px) {
        padding: 0px 40px;
        margin-top: 10vh;
    }
    @media (max-width: 480px) {
        padding: 0px 20px;
        margin-top: 10vh;
    }


    h2 {
        font-size: 72px;
        align-self: flex-start;
        margin: 0px 0px 1vh 0px;
        font-family: 'Gentium Basic', serif;

        
        @media (max-width: 1024px) {
            font-size: 48px;
            margin-bottom: 1vh;
        }
    }

    a {
        align-self: flex-end;
        font-size: 24px;
        
        
        @media (max-width: 1024px) {
        }
        @media (max-width: 768px) {
            font-size: 18px;
        }
        @media (max-width: 480px) {
            font-size: 18px;
        }
    }
`

S.Block = styled.div`
    height: 63px;
    width: 63px;
    background-color: black;
    align-self: flex-start;
    margin-top: 5%;
    
    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`

S.MoreLink = styled(props => <Link {...props} />)`
    color: black;
    text-decoration: none;
`



const entries = [
    {
        title: "An exploration of shape and form",
        category: "Technology",
        date: "11/23/2019"
    },
    {
        title: "An exploration of shape and form",
        category: "Photography",
        date: "11/23/2019"
    },
    {
        title: "An exploration of shape and form",
        category: "Philosophy",
        date: "11/23/2019"
    },
    {
        title: "An exploration of shape and form",
        category: "Technology",
        date: "11/23/2019"
    },
    {
        title: "An exploration of shape and form",
        category: "Art",
        date: "11/23/2019"
    },
]

const Quadrant2 = (props) => (
    <S.Container>
        <h2>JOURNAL</h2>
        {props.posts.map((entry) => {
            return (
                <Entry entry = {entry}/>
            )
        })}
        <S.MoreLink to = "/journal">MORE</S.MoreLink>
        <S.Block />
    </S.Container>
)


export default Quadrant2;