
import Navbar from './component/Navbar'
import Counter from './component/Counter'
import Home from './pages/Home'
import Service from './pages/Service'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home name="Rohitha V."/>}/>
    </Routes>
</>
  )
}

export default App