import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"


import githubPng from "../../images/038-github.png";
import webSvg from "../../images/internet.svg";

const S = {};

S.Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    height: 400px;
    margin: 60px 0px;

    @media (max-width: 1024px) {
  
    }
    @media (max-width: 700px) {
        flex-direction: column;
        height: initial;
    }
    @media (max-width: 480px) {

    }
`


S.Left = styled.div`
    width: 45%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 40%;
    }
    @media (max-width: 700px) {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;;
    }



    div:nth-child(1) {
        box-sizing: border-box;
        height: calc(100% - 55px);
        display: flex;
        flex-direction: column;
        justify-content: center;


        h3 {
            font-size: 100px;
            width: 70%;
            line-height: 80%;
            font-weight: 400;
            margin: 0px;
            box-sizing: border-box;

            @media (max-width: 1170px) {
                font-size: 90px;
            }
            @media (max-width: 1120px) {
                font-size: 80px;
            }
            
            @media (max-width: 1020px) {
                font-size: 75px;
        
            }
            @media (max-width: 930px) {
                font-size: 70px;
            }
            @media (max-width: 850px) {
                font-size: 65px;
            }
            @media (max-width: 800px) {
                font-size: 60px;
            }
            @media (max-width: 750px) {
                font-size: 50px;
            }
            @media (max-width: 700px) {
                font-size: 70px;
                margin-bottom: 20px;
            }
            @media (max-width: 590px) {
                width: 100%;
                font-size: 40px;
            }
            @media (max-width: 480px) {
        
            }
        }
    }

    div:nth-child(2) {
        box-sizing: border-box;
        height: 55px;

        @media (max-width: 590px) {
            height: 45px;
        }

        img {
            height: 100%;
            margin-right: 10px;
        }
    }
`

S.Right = styled.div`
    width: 55%;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;


    @media (max-width: 1170px) {
        width: 60%;
    }
    @media (max-width: 700px) {
        width: 100%;
        margin-top: 30px;
    }
    
    div:nth-child(1) {
        box-sizing: border-box;
        height: calc(100% - 55px);
        display: flex;
        align-items: center;
        align-items: center;
        
        @media (max-width: 700px) {
            margin-bottom: 30px;
        }
        @media (max-width: 590px) {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    div:nth-child(2) {
        box-sizing: border-box;
        height: 55px;
        background-color: black;
        // margin-right: -108px;
        position: relative;
        width: calc(100% + 108px);

        @media (max-width: 900px) {
            width: calc(100% + 68px);
        }

        @media (max-width: 768px) {
            width: calc(100% + 48px);
        }
        @media (max-width: 480px) {
            width: calc(100% + 28px);
        }


    }
`

S.Body = styled.div`
    text-align: justify;
    width: 35%;
    font-weight: 400;
    height: 100%;
    font-size: 16px;


    @media (max-width: 1200px) {
        line-height: 1.1;
    }
    @media (max-width: 1100px) {
        width: 55%;
    }
    @media (max-width: 1024px) {
    }
    @media (max-width: 900px) {
        font-size: 14px;
    }
    @media (max-width: 768px) {

    }
    @media (max-width: 700px) {
        line-height: initial;
        font-size: 16px;
        width: 45%;
    }
    
    @media (max-width: 590px) {
        width: 100%;
        text-align: left;
        line-height: 1.5;
    }
    @media (max-width: 480px) {

    }
`

S.TechList = styled.ul`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    padding: 0px;
    list-style-type: none;
    padding-left: 5%;
    margin: 0px;

    @media (max-width: 590px) {
        width: 70%;
        padding: 0px;
    }

    li {
        font-size: 30px;
        line-height: 80%;
        font-weight: 500;

        @media (max-width: 1200px) {
        }
        @media (max-width: 1100px) {
        }
        @media (max-width: 1024px) {
        }
        @media (max-width: 900px) {
            font-size: 27px;
        }
        @media (max-width: 590px) {
            font-size: 22px;
        }
    `
    



const SelectedWork = (props) => (
    <S.Container>

        <S.Left>
            <div>
                <h3>
                    {props.selectedWork.name.toUpperCase()}
                </h3>
            </div>
            <div>
                <a title = "Backend repository" href = {props.selectedWork.beGithub}><img src = {githubPng}/></a>
                <a title = "Frontend repository" href = {props.selectedWork.feGithub}><img src = {githubPng}/></a>
                <a title = "Deployed link" href = {props.selectedWork.linkUrl}><img src = {webSvg}/></a>
            </div>
        </S.Left>

        <S.Right>
            <div>
                <S.Body>
                    {props.selectedWork.body}
                </S.Body>
                <S.TechList>
                    {props.selectedWork.techStack.map((tech) => {
                        return (
                            <li>{tech}</li>
                        )
                    })}
                </S.TechList>
            </div>

            <div>

            </div>
        </S.Right>
        
    </S.Container>
)

export default SelectedWork;