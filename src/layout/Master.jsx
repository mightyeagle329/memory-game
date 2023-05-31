import React from "react"
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import BgImg from "../assets/imgs/BG.png"

const MasterLayout = ({ children }) => {
  return (
    <div
      className='all-content overflow-hidden w-[1080px] h-[1920px] p-12'
      style={{ backgroundImage: "url(" + BgImg + ")" }}
    >
      <Header />
      <div className='body-container w-full h-full'>{children}</div>
      <Footer />
    </div>
  )
}

export default MasterLayout
