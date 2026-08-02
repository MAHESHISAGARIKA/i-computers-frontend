import { Route,Routes } from 'react-router'
import './App.css'
import ProductCard from './components/productCard'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import TestPage from './pages/test'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'

//26525937347-t6qaipjvjjuv9t4ftkha0ljtqganfcqu.apps.googleusercontent.com

function App() {
  

  return (
    <GoogleOAuthProvider clientId="26525937347-t6qaipjvjjuv9t4ftkha0ljtqganfcqu.apps.googleusercontent.com">
      <div className='w-full h-screen '>
         <Toaster position='top-right'/>
         <Routes>

          <Route path='/*' element={<HomePage/>}/>
          <Route path='/signin' element={<LoginPage/>}/>
          <Route path='/signup' element={<RegisterPage/>}/>
          <Route path='/admin/*' element={<AdminPage/>}/>
          <Route path='/test/*' element={<TestPage/>}/>
          
         </Routes> 
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
