import { useNavigate } from "react-router-dom"
import GamePlayVideo from "../assets/videos/middle.mp4"

const Instruction = () => {
  const navigate = useNavigate()

  const goNext = () => {
    navigate("/menu")
  }

  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-3 bg-[#4e937a] rounded-2xl py-12 px-12 h-[250px]'>
          <h1 className='text-6xl mt-10 text-center text-white'>Instructions</h1>
        </div>
        <div className='bg-[#849483] col-span-3 mt-4 rounded-3xl h-[1310px]' onClick={goNext}>
          <video autoPlay loop muted className='object-cover z-[-1] w-full h-full rounded-3xl'>
            <source src={GamePlayVideo} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Instruction
