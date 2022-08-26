import React from "react"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

export default function Template({children}) {
  return <>
  <Header/>
  <>
  {children}
  </>
  <Footer/>
  
  </>
}
