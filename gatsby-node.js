// const path = require(`path`);
// exports.createPages = async ({actions, graphql, reporter}) => {
//   const {createPage} = actions;

//   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `);
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`);
//     return
//   }

 

//   result.data.allMarkdownRemark.edges.forEach((obj)=>{
//     createPage({
//         path: `/blog/${obj.title}`,
//         component: path.resolve(`src/templates/blog-post.js`),
//         context: {}
//     })
// })
  

 
// };




var path = require('path');

exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions;

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
       `);


    result.data.allMarkdownRemark.edges.forEach((obj)=>{
        createPage({
            path: `/books/${obj.title}`,
            component: path.resolve(`src/template/blog-post.js`),
            context: {
                itemDetails: obj
            }
        })
    })
}

