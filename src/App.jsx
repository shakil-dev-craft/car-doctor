
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {

  const location = useLocation();
  const isSignupOrSignin = location?.pathname === 'signup' || location?.pathname === 'signin';
  const isSmallDevice = window.innerWidth <= 768; // Example breakpoint for small devices

  return (
    <>
      <Navbar />
      <div className={`min-h-[calc(100vh-423px)] max-w-7xl mx-auto py-5 ${isSmallDevice && isSignupOrSignin ? 'px-0' : 'px-4 md:px-5 xl:px-0'}`}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App;
