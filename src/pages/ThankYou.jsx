import { useNavigate } from "react-router-dom"
import GamePlayVideo from "../assets/videos/middle.mp4"

const ThankYou = () => {
  const navigate = useNavigate()

  const goNext = () => {
    navigate("/")
  }

  const nickname = 'leanne'

  return (
    <div className='w-[1080px] h-[1920px] top-0 fixed'>
      <div className='absolute top-0 bottom-0 left-0 right-0 m-auto w-[715px] h-[990px] bg-[#107C10]'>
        <div className='flex flex-col text-white text-center font-extrabold mt-32'>
          <span className='m-0 p-0 [line-height:1em] [font-size:90px]'>THANKS FOR PLAYING</span>
          <span className='m-0 p-0 uppercase [line-height:1.2em] [font-size:130px]'>{nickname}!</span>
        </div>
        <div className='flex flex-col text-white text-center font-extrabold mt-32'>
          <span className='m-0 p-0 [line-height:1em] [font-size:40px]'>See an Xbox team member for your prize</span>
        </div>
        <button className="bg-[#9BF00B] flex justify-center items-center px-12 py-3 m-auto mt-8 rounded-lg [font-size:50px] font-extrabold [color:#054B16]" onClick={goNext}>
          <span>PLAY AGAIN</span>
          <span className="w-[50px]"></span>
          <svg width="24" height="35" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.52975 5.74727L4.35512 10.8279H0.543686L3.74641 5.74727L0.543686 0.666626H4.35512L7.52975 5.74727Z" fill="#054A17" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ThankYou
