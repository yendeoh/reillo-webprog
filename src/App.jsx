import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> Welcome to My React App</h1>
        <p>
          Name: Rhoedney Reillo<br />
          Student ID: 2023-101398<br />
          Section: INF234<br />
          <a href="https://github.com/yendeoh/reillo-webprog">
           https://github.com/yendeoh/reillo-webprog
          </a>
        </p>
      </div>
    </>
  )
}

export default App
