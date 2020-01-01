/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 * 
 * From what I (Vlad) understand, this file `gatsby-node.js` dynamically creates "exports" files.
 */

// You can delete this file if you're not using it


// =============================================================================================================
// Code uses the graphql to query Markdown file data. Next, uses the createPage action creator 
// to create a page for each of the Markdown files using the blogTemplate.js in src/templates
// =============================================================================================================

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const mdxPostTemplate = path.resolve(`src/templates/mdxTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  const mdxResult = await graphql(`
    {
      allMdx(
        sort: {order: DESC, fields: [frontmatter ___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
    console.log(mdxResult)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  if (mdxResult.errors) {
    reporter.panicOnBuild(`Error while running MDX GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  mdxResult.data.allMdx.edges.forEach(({ node }) => {
    console.log(node.frontmatter.path)
    createPage({
      path: node.frontmatter.path,
      component: mdxPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}