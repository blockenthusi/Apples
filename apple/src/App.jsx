
import './App.css'
import Header from './Components/Header'
import Dropdown from './Components/Dropdown'
import { useState } from 'react'
import Mac from './Components/Mac'
import Imac from './Components/Imac'
import Iphone from './Components/Iphone'
import Box from './Components/Fourbox'
import Single from './Components/Single'
import Footer from './Components/Footer'

function App() {
      
const [show, setShow] = useState(false)

return (
  <>
    
   <Header show={show} setShow={setShow}/>
   {
    show === true? <Dropdown/>: null
   }
   <Mac/>
   <Imac/>
   <Iphone/>
   <Box />
   <Single/>
   <Footer/>
    </>
  )
}

export default App
