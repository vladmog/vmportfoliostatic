import React from "react";
import styled from "styled-components";

const S = {};

S.Container = styled.div`
    // border: solid black 1px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    height: 350px;
    margin: 60px 0px;
`


S.Left = styled.div`
    // border: solid green 1px;
    width: 45%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;


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
        }
    }

    div:nth-child(2) {
        box-sizing: border-box;
        height: 55px;
    }
`

S.Right = styled.div`
    width: 55%;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;

    div:nth-child(1) {
        box-sizing: border-box;
        height: calc(100% - 55px);
        display: flex;
        align-items: center;

    }

    div:nth-child(2) {
        box-sizing: border-box;
        height: 55px;
        background-color: black;
        // margin-right: -108px;
        position: relative;
        width: calc(100% + 108px);

        @media (max-width: 768px) {
            width: calc(100% + 40px);
            background-color: red;
        }
        @media (max-width: 480px) {
            width: calc(100% + 20px);
            background-color: green;
        }


    }
`

S.Body = styled.div`
    text-align: justify;
    width: 35%;
    font-weight: 400;
    height: 100%;
`

S.TechList = styled.ul`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    padding: 0px;
    list-style-type: none;
    padding-left: 5%;

    li {
        font-size: 30px;
        line-height: 80%;
        font-weight: 500;
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