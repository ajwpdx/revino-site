// import * as React from "react"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import Header from "../layouts/Header"
// import Footer from "../layouts/Footer"

// const BlogPostTemplate = ({ data, location }) => {
//   const post = data.markdownRemark
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   const { previous, next } = data

//   return (
//     <>
//       <Seo
//         title={post.frontmatter.title}
//         description={post.frontmatter.description || post.excerpt}
//       />
//       <Header />
//       <Layout location={location} title={siteTitle}>
//         <main className="blog-post">
//           <article
//             itemScope
//             itemType="http://schema.org/Article"
//           >
//             <section className='article-title'>
//             </section>
//             <section
//               dangerouslySetInnerHTML={{ __html: post.html }}
//               itemProp="articleBody"
//             />
//           <Bio />
//           </article>
//           <nav className="blog-post-nav">
//             <hr />
//             <ul>
//               <li>
//                 {previous && (
//                   <Link to={previous.fields.slug} rel="prev">
//                     ← {previous.frontmatter.title}
//                   </Link>
//                 )}
//               </li>
//               <li>
//                 {next && (
//                   <Link to={next.fields.slug} rel="next">
//                     {next.frontmatter.title} →
//                   </Link>
//                 )}
//               </li>
//             </ul>
//           </nav>
//         </main>
//       </Layout>
//       <Footer />
//     </>
//   )
// }

// export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug(
//     $id: String!
//     $previousPostId: String
//     $nextPostId: String
//   ) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(id: { eq: $id }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//     previous: markdownRemark(id: { eq: $previousPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//     next: markdownRemark(id: { eq: $nextPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//   }
// `
