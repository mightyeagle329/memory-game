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

  return (
    <>
      <div className='context'>
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
      </div>

      <Background />
    </>
  )
}

export default Win
