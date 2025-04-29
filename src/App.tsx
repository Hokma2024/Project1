import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const IDS = [
  { id: 1, nick: 'nick1' },
  { id: 2, nick: 'nick2' },
  { id: 3, nick: 'nick3' },
  { id: 4, nick: 'nick4' },
  { id: 5, nick: 'nick5' },
];
const AUTHORS = [
  {id:1, login: 'login1'},
  {id:2, login: 'login2'},
  {id:3, login: 'login3'},
  {id:4, login: 'login4'},
  {id:5, login: 'login5'}
];
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="authors">
        {AUTHORS.map((author)=>(
          <div key ={author.id}>
            <h2>{author.login}</h2>
            <p>ID:{author.id}</p>
          </div>
        ))

        }
      </div>
      
      <div className = "ideas">
        {IDS.map((idea)=>(
          <div key = {idea.id}>
            <h2>{idea.nick}</h2>
            <p>ID: {idea.id}</p>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default App
