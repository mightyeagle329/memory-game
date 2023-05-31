import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'
import ResetSVG from '../assets/svg/reset.svg'
import HomeSVG from '../assets/svg/home.svg'

function ScoreBoard() {
  const dispatch = useDispatch()
  const { score, success } = useSelector((state) => state.game)
  const { current } = useSelector((state) => state.level)

  return (
    <div className="score">
      <div className="trying">Score: {score}</div>
      <ReactSVG src={ResetSVG} className="reset-btn" onClick={() => dispatch.game.reset(current)} />
      <Link to="/">
        <ReactSVG src={HomeSVG} className="home-btn" onClick={() => dispatch.game.reset(current)} />
      </Link>
      <div className="successing">
        Success: {success} / {(current * current) / 2}
      </div>
    </div>
  )
}

export default ScoreBoard
