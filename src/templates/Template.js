import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer.js"

export default function Template({children}) {
  return <>
  <Navbar/>
  <>
  {children}
  </>
  <Footer/>
  
  </>
}
