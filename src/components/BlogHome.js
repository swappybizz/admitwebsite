import React from 'react'
import {StaticImage} from "gatsby-plugin-image"

const BlogHome = () => {
  return (
    <>
     <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-96 overflow-hidden">
                <StaticImage
                  alt="blogPost1" // change this in production

                  className="object-cover object-center h-full w-full"
                  src="../images/blog1.png"
                  placeholder="tracedSVG"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Workation kan gjøre deg til en bedre leder
              </h2>
              <p className="leading-relaxed text-base">
              Les mer
              </p>
              
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-96 overflow-hidden">
                <StaticImage
                  alt="blog2"
                  className="object-cover object-center h-full w-full"
                  src="../images/blog2.png"
                  placeholder="tracedSVG"

                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                The Har vi en “sort svane”?
              </h2>
              <p className="leading-relaxed text-base">
              Les mer
              </p>
              
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}


export default BlogHome


