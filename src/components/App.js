
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [sum, setSum] = useState(0)
  function add(newNum){
    setSum(sum+parseInt(newNum))
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" onChange={e=>add(e.target.value)}  />
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
