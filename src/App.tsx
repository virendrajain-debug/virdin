import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <h1>VIRDEL AI + React</h1>
      <p>Edit <code>src/App.tsx</code> and save to see changes</p>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
    </div>
  )
}

export default App