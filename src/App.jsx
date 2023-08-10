import { Routes, Route, Navigate} from 'react-router-dom'
import ScoreboardApp from './scoreboard/App'
import MemeApp from './meme-generator/App'
import ScoreContxApp from './scoreboard_wContextApi/App'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigate to="/meme-generator" />} />
      <Route path='/meme-generator' element={<MemeApp />} />
      <Route path='/scoreboard' element={<ScoreboardApp />} />
      <Route path='/scoreboard2' element={<ScoreContxApp />} />
    </Routes>
  )
}

export default App
