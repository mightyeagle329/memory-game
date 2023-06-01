import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import ResetSVG from '../assets/svg/reset.svg'
import HomeSVG from '../assets/svg/home.svg'
import Background from '../components/Background.jsx'

function Win() {
  const dispatch = useDispatch()
  const { score } = useSelector((state) => state.game)
  const { current } = useSelector((state) => state.level)

  const bestScore = localStorage.getItem('bestScore')
  localStorage.setItem('bestScore', Math.max(score, bestScore))

  const time = 68;

  return (
    <div className='w-[1080px] h-[1920px] top-0 fixed'>
      <div className='absolute top-0 bottom-0 left-0 right-0 m-auto w-[715px] h-[990px] bg-[#107C10]'>
        <div className='flex flex-col text-white text-center font-extrabold mt-48 [font-size:130px]'>
          <span className='m-0 p-0 [line-height:1em]'>WELL</span>
          <span className='m-0 p-0 [line-height:1em]'>DONE!</span>
        </div>
        <div className='flex flex-col text-white text-center font-extrabold m-24'>
          <span className='[font-size:55px]'>Your time is</span>
          <span className='[font-size:145px] [animation:opacity_infinite_1s,scale_infinite_1s]'>{Math.floor(time / 60) + ':' + (time % 60 < 10 ? '0' + time % 60 : time % 60)}</span>
        </div>
      </div>
      {/* <div className='context'>
        <h1>You Win! 🎉</h1>
        <div className="win-menu-text">
          <p className="win-menu-text__item">score: {score}</p>
          <p className="win-menu-text__item">best: {Math.max(score, bestScore)}</p>
        </div>
        <div className="win-menu-controls">
          <Link to="/game" className="win-menu-controls__item">
            <ReactSVG
              src={ResetSVG}
              className="reset-btn"
              onClick={() => dispatch.game.reset(current)}
            />
          </Link>
          <Link to="/" className="win-menu-controls__item">
            <ReactSVG
              src={HomeSVG}
              className="home-btn"
              onClick={() => dispatch.game.reset(current)}
            />
          </Link>
        </div>
      </div> */}
    </div>
  )
}

export default Win
