import { Link, useParams } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { getTextColor, visibleHeader } from "../../utils/utils";

const Header = () => {
  const location = useLocation();

  return (
    <div className={`w-full h-[200px] bg-[transparent] flex flex-col items-center justify-center rounded-2xl mb-8 text-white`} style={{ display: visibleHeader(location.pathname), color: getTextColor(location.pathname) }}>
      <h2 className='text-center absolute m-0 p-0 [font-size:90px] [line-height:72px] font-extrabold [top:120px]'>GAME PASS</h2>
      <h1 className='text-center absolute m-0 p-0 [font-size:120px] [line-height:110px] font-extrabold [top:200px]'>MATCH GAME</h1>
      <div className="text-center bg-[#9BF00B] w-[100px] h-[16px] absolute [top:340px] [transform:skew(-30deg)]"></div>
    </div>
  )
}

export default Header
