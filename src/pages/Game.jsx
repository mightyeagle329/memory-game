import GameTable from '../components/GameTable'
import ScoreBoard from '../components/ScoreBoard'
import Background from '../components/Background.jsx'

function Game() {
  return (
    <>
      <div className="context">
        <div className="game-container">
          <ScoreBoard />
          <GameTable />
        </div>
      </div>

      <Background />
    </>
  )
}

export default Game
