import { useState } from 'react'

function Contador() {

  const [count, setCount] = useState(0)


  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
      <button onClick={() => setCount(count - 1)}>Restar</button>
    </div>
  )
}

export default Contador