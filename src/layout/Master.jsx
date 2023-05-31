import React from "react"
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import BgImg from "../assets/imgs/BG.png"

const MasterLayout = ({ children }) => {
  return (
    <div
      className='all-content overflow-hidden bg-[#107C10] w-[1080px] h-[1920px] p-12'
      style={{ backgroundImage: "url(" + BgImg + ")" }}
    >
      <Header />
      <div className='w-full flex items-center justify-center absolute left-0' style={{ top: '460px' }}>{children}</div>
      <Footer />
    </div>
  )
}

export default MasterLayout
