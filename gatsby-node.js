/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require(`gatsby-awesome-pagination`)

/**
 * Projects
 */

// Define the "Project" node type with a "collection" field.
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
      type Project implements Node @dontInfer {
      id: ID!
      name: String!
      features: String!
      imageName: String!
      url: String!
      }
    `)
}

// Add and populate a "collection" field based on the file directory name.
// exports.createResolvers = ({ createResolvers, getNode }) => {
//   // Get the containing directory for the event (past or future)
//   const collection = source => getNode(source.parent).relativeDirectory

//   // Add a "collection" field to each node.
//   createResolvers({
//     Event: {
//       collection: {
//         resolve: source => collection(source),
//       },
//     },
//   })
// }
