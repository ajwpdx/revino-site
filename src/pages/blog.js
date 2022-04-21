import * as React from "react"
import { Link, graphql } from "gatsby"
import '../styles/index.scss'
import logo from "../images/revino-logo-blue.png"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Hero from "../layouts/Hero"

const hero = {
    title: "Revino Blog",
    description: "Welcome to the Revino blog, where you'll find updates from us and articles about the sustainabiliy and the refillable bottle economy."
} 

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes

    if (posts.length === 0) {
        return (
            <>
                <Header />
                <Layout location={location} title={siteTitle}>
                    <Seo title="All posts" />
                    <p>
                        There are currently no blog posts on this site.
                    </p>
                </Layout>
                <Footer />
            </>
        )
    }

    return (
        <div id='blog'>
            <Header />
            <Layout location={location} title={siteTitle}>
                <Seo title="All posts" />
                <Hero title ={hero.title} description={hero.description}/>
                <div className="blog-list-container">

                <ol className='blog-list'>
                    {posts.map(post => {
                        const title = post.frontmatter.title || post.fields.slug

                        return (

                            <li className="blog-card" key={post.fields.slug}>
                                <Link to={post.fields.slug} itemProp="url">
                                    <div className='blog-item-img'>
                                        <img src={logo} alt={title} />
                                    </div>
                                    <article
                                        itemScope
                                        itemType="http://schema.org/Article"
                                    >
                                        <div className='blog-card-title'>
                                            <h2>
                                                <Link to={post.fields.slug} itemProp="url">
                                                    <span itemProp="headline">{title}</span>
                                                </Link>
                                            </h2>
                                        </div>
                                        <div className='blog-card-description'>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: post.frontmatter.description || post.excerpt,
                                                }}
                                                itemProp="description"
                                            />
                                        </div>
                                        <div>
                                            <p class="arrow-link">
                                                learn more <svg class="svg-icon long-arrow" width="14" height="14" aria-hidden="true" role="img" focusable="false" viewBox="0 0 13 9" xmlns="http://www.w3.org/2000/svg"><path d="M8.84375 0.921875C8.89844 0.867188 8.95312 0.8125 9.0625 0.8125C9.14453 0.8125 9.22656 0.867188 9.28125 0.921875L12.8906 4.53125C12.9453 4.58594 13 4.66797 13 4.75C13 4.85938 12.9453 4.91406 12.8906 4.96875L9.28125 8.57812C9.22656 8.66016 9.14453 8.6875 9.0625 8.6875C8.95312 8.6875 8.89844 8.66016 8.84375 8.57812L8.29688 8.05859C8.21484 8.00391 8.1875 7.92188 8.1875 7.8125C8.1875 7.73047 8.21484 7.64844 8.29688 7.59375L10.5117 5.46094H1.07812C0.96875 5.46094 0.886719 5.43359 0.832031 5.37891C0.777344 5.32422 0.75 5.24219 0.75 5.13281V4.36719C0.75 4.28516 0.777344 4.20312 0.832031 4.14844C0.886719 4.09375 0.96875 4.03906 1.07812 4.03906H10.5117L8.29688 1.90625C8.21484 1.85156 8.1875 1.79688 8.1875 1.6875C8.1875 1.60547 8.21484 1.52344 8.29688 1.44141L8.84375 0.921875Z"></path></svg></p>
                                        </div>

                                    </article>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
                </div>
            </Layout>
            <Footer />
        </div>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description

        }
      }
    }
  }
`
