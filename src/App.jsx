
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-[calc(100vh-423px)] max-w-7xl mx-auto py-5 px-4 md:px-5 xl:px-0'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
