
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='max-w-[1200px] mx-auto py-5'>
      <Navbar></Navbar>
      <br />
      <br />
      <Outlet></Outlet>
    </div>
  )
}

export default App
