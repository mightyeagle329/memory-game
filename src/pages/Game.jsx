import GameTable from '../components/GameTable'
import ScoreBoard from '../components/ScoreBoard'
import Background from '../components/Background.jsx'

function Game() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      {/* <ScoreBoard /> */}
      <GameTable />
    </div>
  )
}

export default Game
