import { Link, useParams } from "react-router-dom"

const Header = () => {
  return (
    <div className='w-full h-[200px] bg-[transparent] flex flex-col items-center justify-center rounded-2xl mb-8'>
      <h2 className='text-center text-white absolute m-0 p-0' style={{fontSize: '90px', lineHeight: '72px', fontWeight: 800, top: '120px'}}>GAME PASS</h2>
      <h1 className='text-center text-white absolute m-0 p-0' style={{fontSize: '120px', lineHeight: '110px', fontWeight: 800, top: '200px'}}>MATCH GAME</h1>
      <div className="text-center bg-[#9BF00B] w-[100px] h-[16px] absolute" style={{top: '340px', transform: 'skew(-30deg)'}}></div>
    </div>
  )
}

export default Header
