import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby"

import Quadrant1 from "../components/landing/quadrant1";
import Quadrant2 from "../components/landing/quadrant2";
import Quadrant3 from "../components/landing/quadrant3";
import Quadrant4 from "../components/landing/quadrant4";

import Layout from "../components/layout";

const S = {};

S.Container = styled.div`
    top: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Archivo Black', sans-serif;    
    font-weight: 700;
    font-style: normal;
    background-color: white;
    max-width: 1500px;
    margin: auto;

    footer {
        align-self: center;
    
        @media (max-width: 480px) {
            font-size: 12px;
        }
    }
    
`

const Landing = ({
    data: {
      allMdx: { edges },
    },
  }) => {
    // const Posts = edges
    //   .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    //   .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    const posts = edges.map((edge) => {
      return (
        {
          path: edge.node.frontmatter.path,
          date: edge.node.frontmatter.date,
          title: edge.node.frontmatter.title,
          category: edge.node.frontmatter.category,
        }
      )
    })
    console.log(posts)
    return (
        <Layout>
            <S.Container>
                <Quadrant1 />
                <Quadrant2 posts = {posts}/>
                <Quadrant3 />
                <Quadrant4 />  
                <footer>
                    Icons made by Freepik from www.flaticon.com
                </footer>  
            </S.Container>
        </Layout>
    )
  }

export default Landing;

export const pageQuery = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date}) {
      edges {
        node {
          id
          frontmatter {
            path
            date
            title
            category
          }
        }
      }
    }
  }
`

