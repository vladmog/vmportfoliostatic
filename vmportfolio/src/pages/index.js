import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby"

import Quadrant1 from "../components/landing/quadrant1";
import Quadrant2 from "../components/landing/quadrant2";
import Quadrant3 from "../components/landing/quadrant3";
import Quadrant4 from "../components/landing/quadrant4";

import Layout from "../components/layout";
import PostLink from "../components/post-link"

const S = {};

S.Container = styled.div`
    top: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: acumin-pro-wide, sans-serif;
    font-weight: 700;
    font-style: normal;
    background-color: white;

    footer {
        align-self: center;
    
        @media (max-width: 480px) {
            font-size: 12px;
        }
    }
    
`

const Landing = ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) => {
    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    return (
        <Layout>
            <S.Container>
                <div>{Posts}</div>
                <Quadrant1 />
                <Quadrant2 />
                <Quadrant3 />
                <Quadrant4 />  
                <footer>
                    Icons made by Freepik from www.flaticon.com
                </footer>  
            </S.Container>
        </Layout>
    )
  }



// const Landing = (props) => (
//   <Layout>
//     <S.Container>
//         <Quadrant1 />
//         <Quadrant2 />
//         <Quadrant3 />
//         <Quadrant4 />  
//         <footer>
//             Icons made by Freepik from www.flaticon.com
//         </footer>  
//     </S.Container>
//   </Layout>
// )


export default Landing;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`