import {Board} from './components/Board'
import { InputBox } from './components/InputBox'
import './App.css'
import { useState } from 'react'

function App() {
const [gamesize, setGamesize] = useState(Number(3))
  return (
    <div className="flex flex-col justify-center items-center h-dvh gap-2">
      <InputBox onChange={(event)=>{
        const value = Number(event.target.value)
        setGamesize(value)
      }}></InputBox>
      <div>
        <Board size = {gamesize}></Board>
      </div>
    </div>
  )
}

export default App
