import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"


const S = {};

S.Container = styled(props => <Link {...props} />)`
    text-decoration: none;
    color: black;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    border-bottom: solid black 3px;
    padding: 12px 0px 12px 0px;
    // border: solid green 1px;
    
    @media (max-width: 900px) {
        flex-direction: column;
        // height: 12vh;
        height: auto;
        padding: 5px 0px 5px 0px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        // height: 12vh;
        height: auto;
        padding: 5px 0px 5px 0px;
    }
    @media (max-width: 480px) {
        flex-direction: column;
        // height: 12vh;
        height: auto;
        padding: 5px 0px 5px 0px;
    }

    // TITLE CATEGORY AND DATE
    span {
        text-align: left;
        // border: solid black 1px;
        width: 55%;
        
        @media (max-width: 1024px) {
            width: 100%;
            font-size: 18px;
        }
        @media (max-width: 900px) {
            width: 100%;
            font-size: 24px;
        }
        @media (max-width: 768px) {
            width: 100%;
            font-size: 24px;
        }
        @media (max-width: 480px) {
            width: 100%;
            font-size: 18px;
        }
    }

 
    // CATEGORY AND DATE CONTAINER
    div {
        width: 40%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        // border: solid purple 1px;

        
        @media (max-width: 1024px) {
            width: 60%;
            justify-content: flex-start;
        }
        @media (max-width: 900px) {
            width: 100%;
            justify-content: flex-start;
            color: #515151;
        }
        @media (max-width: 768px) {
            width: 100%;
            justify-content: flex-start;
            color: #515151;
        }
        @media (max-width: 480px) {
            width: 100%;
            justify-content: flex-start;
            color: #515151;
        }

        // BOTH CATEGORY AND DATE
        span {
            text-align: left;
            // border: solid black 1px;
            width: 50%;

            
            @media (max-width: 900px) {
                text-align: left;
                font-size: 18px;
            }
            @media (max-width: 768px) {
                text-align: left;
                font-size: 18px;
            }
            @media (max-width: 480px) {
                text-align: left;
                font-size: 14px;
            }
    
        }

        // DATE
        span:nth-child(2) {
            text-align: right;
            // border: solid black 1px;

            
            @media (max-width: 900px) {
                text-align: center;
                font-size: 18px;
            }
            @media (max-width: 768px) {
                text-align: center;
                font-size: 18px;
            }
            @media (max-width: 480px) {
                text-align: left;
                font-size: 14px;
            }
        }
    }

`


function Entry(props){
    console.log(props)
    return(
        <S.Container to={props.entry.path}>
            <span>{props.entry.title}</span>
            <div>
                <span>{props.entry.category}</span>
                <span>{props.entry.date}</span>
            </div>
            
        </S.Container>
    )
}

export default Entry;