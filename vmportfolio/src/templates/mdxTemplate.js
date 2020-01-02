import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"


export default function MdxTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.markdownRemark holds your post data
  const { frontmatter, body } = mdx
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>MDX TEMPLATE</h1>
        <h1>frontmatter title</h1>
        <h1>{frontmatter.title}</h1>
        <hr />
        <h1>frontmatter date</h1>
        <h2>{frontmatter.date}</h2>
        <hr />
        <h1>content</h1>
        {/* <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: body }}
        /> */}
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </div>
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