import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Transfer } from './pages/Transfer'
import { Dashboard } from './pages/Dashboard'
import { Me } from './pages/Me'


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<Signup/>} />
                <Route path='/signin' element={<Signin/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/transfer' element={<Transfer/>} />
                <Route path='/' element={<Me/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App