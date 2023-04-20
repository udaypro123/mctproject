import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './Componets/login/Login'
import Home from './Componets/home/Home'
import Products from './Componets/product/Products'
import Users from './Componets/user/Users'
import Contact from './Componets/contact/Contact'
import Navbar from './Componets/navbar/Navbar'
import { authcontext } from './Componets/contextApi/context';
import { useContext } from 'react';
import Cartitem from './Componets/Cart/Cartitem';
import Showproductdetails from './Componets/product/Showproductdetails';
import Homedetails from './Componets/home/Homedetails';
// import Productdetails from './components/product/Productdetails';
import Protect from './Componets/login/protect';





function App() {

  const { islogin } = useContext(authcontext)

  return (
    <>
      <BrowserRouter>
        <div className='Appcontainer'>
          <div className='Appmaindiv'>
            {
              islogin ? <>
                <div className='navbarforALLdiv'>
                  <Navbar />
                </div>
                <div className='RoutespgesforALLdiv'>
                  <Routes>
                    <Route path='/' element={ <Home /> }></Route>
                    <Route path='/:i' element={ <Homedetails /> }></Route>

                    <Route path='/products' element={<Protect><Products /></Protect>  }></Route>
                    <Route path='/products/:id' element={ <Products /> }></Route>
                    <Route path='/products/:id/:i' element={<Showproductdetails/>}></Route>
                   
                    <Route path='/users' element={<Protect><Users /> </Protect> }></Route>
                    <Route path='/contact' element={<Protect> <Contact /></Protect> }></Route>
                    <Route path='/addtocart' element={<Protect><Cartitem /></Protect>  }></Route>
                    <Route path='/*' element={ <Home /> }></Route>
                  </Routes>
                </div>
              </> : <Login />
            }



          </div>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
