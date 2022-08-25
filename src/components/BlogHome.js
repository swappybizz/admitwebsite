import React from 'react'
import {graphql,useStaticQuery} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogHome = () => {
const data =  useStaticQuery(graphql`
query MyQuery {
    file(relativePath: {eq: "blog1.png"}) {
      childImageSharp {
        fluid {
          originalImg
        }
      }
    }
  }
`)


console.log(data.file.childImageSharp.fluid.srcWebp)
  return (
    <div className="flex p-5 flex-wrap w-1/2 " >
        <GatsbyImage fimage={data.file.childImageSharp.fluid.originalImg} />



    </div>
  )
}

export default BlogHome