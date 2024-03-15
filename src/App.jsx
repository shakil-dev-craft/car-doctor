
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './pages/Footer/Footer'
import Navbar from './pages/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className=''>
      <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
