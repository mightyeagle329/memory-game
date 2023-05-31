import { useNavigate } from "react-router-dom"
import GamePlayVideo from "../assets/videos/middle.mp4"

const ThankYou = () => {
  const navigate = useNavigate()

  const goNext = () => {
    navigate("/")
  }

  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-3 bg-[#4e937a] rounded-2xl py-12 px-12 h-[250px]'>
          <h1 className='text-6xl mt-10 text-center text-white'>Thank you!</h1>
        </div>
        <div className='bg-[#849483] col-span-3 mt-4 rounded-3xl h-[1310px]'>
          <h1 className='text-7xl text-white text-center mt-[50%]'>Image for Thank you </h1>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
