import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './assets/components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h2>Counter</h2>
        <Counter initialState={0}/>
        <Counter initialState={10} num={10} />
        <Counter initialState={1000000} num={-100.00000005}/>
      </div>
  )
}

export default App
