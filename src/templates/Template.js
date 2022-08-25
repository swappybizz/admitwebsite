import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Template({Children}) {
  return <>
  <Header/>
  <>
  {Children}
  </>
  <Footer/>
  
  </>
}
