import { useNavigate } from "react-router-dom"
import GamePlayVideo from "../assets/videos/middle.mp4"

const Home2 = () => {
  const navigate = useNavigate()

  const goNext = () => {
    navigate("/instruction")
  }

  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-3 bg-[#4e937a] rounded-2xl py-10 px-20 h-[250px]'>
          <h2 className='text-7xl text-center text-white leading-tight'>
            STRONG CALL TO ACTION MESSAGE
          </h2>
        </div>
        <div className='bg-[#849483] col-span-3 mt-5 rounded-3xl h-[1310px]' onClick={goNext}>
          <video autoPlay loop muted className='object-cover z-[-1] w-full h-full rounded-3xl'>
            <source src={GamePlayVideo} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Home2
