
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Homepage from './pages/Homepage'
import Watchhistory from './pages/Watchhistory'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
    <Header/>
   
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/watch-history' element={<Watchhistory/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
