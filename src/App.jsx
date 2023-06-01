import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Game from './pages/Game.jsx'
import Win from './pages/Win.jsx'
import Background from './components/Background.jsx'
import './styles/app.scss'
import MasterLayout from "./layout/Master"
import Instruction from "./pages/Instruction"
import CollectData from "./pages/CollectData"
import StackUp from "./pages/StackUp"
import ThankYou from "./pages/ThankYou"

function App() {
  return (
    <MasterLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/instruction' element={<Instruction />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/game" element={<Game />} />
        <Route path="/win" element={<Win />} />
        <Route path='/collect-data' element={<CollectData />} />
        <Route path='/stack-up' element={<StackUp />} />
        <Route path='/thank-you' element={<ThankYou />} />
      </Routes>
    </MasterLayout>
  )
}

export default App
