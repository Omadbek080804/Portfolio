import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/banner/Banner'
import './Weather.css'
import MiniProjects from './components/mini/MiniProjects'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Banner />
      <MiniProjects />
    </div>
  )
}

export default App
