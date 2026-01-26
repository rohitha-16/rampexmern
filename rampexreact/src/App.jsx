
import Navbar from './component/Navbar'
import Counter from './component/Counter'
import Home from './pages/Home'
import Service from './pages/Service'
import About from './pages/About'
import Contact from './pages/Contact'
import UseState from './Hooks/UseState'
import Login from './Auth/Login'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home name="Rohitha V."/>}/>
      <Route path='/about' element={<About name="Rohitha V."/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/useState' element={<UseState/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
</>
  )
}

export default App