import { useNavigate } from "react-router-dom"
import GamePlayVideo from "../assets/videos/middle.mp4"

const Home2 = () => {
  const navigate = useNavigate()

  const goNext = () => {
    navigate("/instruction")
  }

  return (
    <div>
      <div className='bg-[transparent] w-full [font-size:65px] font-extrabold'>
        <h2 className='text-center text-white'>
          MATCH THE CARDS & WIN
        </h2>
      </div>
      <div className='bg-[#FFAFAF] mt-5 w-[940px] h-[1265px]'>
        <video autoPlay loop muted className='object-cover z-[-1] w-full h-full rounded-3xl'>
          <source src={GamePlayVideo} type='video/mp4' />
        </video>
        <button onClick={goNext} className="w-[210px] h-[210px] bg-[#595959] rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto">
          <svg className="m-auto" width="100" height="100" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5959 13.1919L0.414128 25.9986L0.414129 0.385252L22.5959 13.1919Z" fill="#D9D9D9" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Home2
