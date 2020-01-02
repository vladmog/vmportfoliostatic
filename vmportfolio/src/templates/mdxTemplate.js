import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import styled from "styled-components"

const S = {};
S.Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  padding: 0px 100px;
  // border: solid green 5px;
  font-family: 'Archivo Black', sans-serif;    
  font-weight: 700;
  left 0px;
  right 0px;
  margin-bottom: 30px;
  margin-top: 8vh;


  @media (max-width: 1024px) {

  }
  @media (max-width: 768px) {
      padding: 0px 40px;
  }
  @media (max-width: 480px) {
      padding: 0px 20px;
  }
`

export default function MdxTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds your post data
  const { frontmatter, body } = mdx
  return (
    <Layout>
      <S.Container className="blog-post">
        <h1>{frontmatter.title}</h1>
        <hr />
        <h2>{frontmatter.date}</h2>
        <hr />
        <MDXRenderer>{body}</MDXRenderer>
      </S.Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "")
        path
        title
      }
      body
    }
  }
`

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `