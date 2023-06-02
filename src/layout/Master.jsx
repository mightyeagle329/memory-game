import React from "react"
import { useLocation } from 'react-router-dom';
import { getBackground, getBackgroundColor } from "../utils/utils";
import Header from "./partials/Header"
import Footer from "./partials/Footer"

const MasterLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className={`all-content overflow-hidden bg-no-repeat bg-cover w-[1080px] h-[1920px] p-12`} style={{ backgroundImage: `url(${getBackground(location.pathname)})`, backgroundColor: getBackgroundColor(location.pathname) }}>
      <Header />
      <div className='w-full flex items-center bg-[transparent] justify-center absolute left-0 [top:460px]'>{children}</div>
      <Footer />
    </div>
  )
}

export default MasterLayout
