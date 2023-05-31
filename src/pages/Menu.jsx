import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import ChangeLevel from '../components/ChangeLevel'
import PlaySVG from '../assets/svg/play.svg'
import Background from '../components/Background.jsx'

function Menu() {
  return (
    <>
      <div className="context">
        <div className="menu">
          <h1>Memory game</h1>
          <ChangeLevel />
          <Link to="/game" className="start-btn">
            <ReactSVG className="play-svg" src={PlaySVG} />
            <div>play</div>
          </Link>
        </div>
      </div>

      <Background />
    </>
  )
}

export default Menu
