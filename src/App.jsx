import { useState } from 'react'
import './App.css'
import TextBox from './components/textbox'

function App() {
  //global variables
  const [count, setCount] = useState(0);
  

  return (
    <>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <TextBox text={count}/>
      </div>
     
    </>
  )
}

export default App
