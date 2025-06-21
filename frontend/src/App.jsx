import {Routes,Route} from 'react-router'

import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'



const App = () => {
  const {showLogin}=useContext(AppContext)
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28
    min-h-screen bg-gradient-to-b from-gray-200 to-blue-200">
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-credit" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
