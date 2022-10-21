import './styles/App.css';
import Topbar from './component/Topbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';  
import Announcement from './component/Announcement';
import Register from './pages/Register';
import { createContext, useState } from 'react';
import Login from './pages/Login';   
import Products from './component/Products';
import NewsLetter from './component/NewsLetter';
import Category from './component/Category';
import SingleProduct from './pages/SingleProduct';
import Footer from './component/Footer';
import CartPage from './pages/CartPage';
import Slider from './component/Slider';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from 'react-redux';  

export const Context = createContext();


function App() {

  //const user = useSelector(state => state.user.currentUser);
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)


  return (
    <div className="App">
        <BrowserRouter>
          <Context.Provider value={{user, setUser, cart, setCart, setTotal, total}}>
            <Topbar/>
            <Announcement></Announcement>
            <Routes>
              <Route path='/' exact element={ <Home/> } />
              <Route path='/products/:category'  element={ <ProductList/> } />
              <Route path='/product/:id'  element={ <SingleProduct/> } />
              <Route path='/cart'  element={ <CartPage/> } />
              <Route path='/productslist'  element={ <ProductList/> } />
              <Route path='/login'  element={ user ? <Navigate  to="/" /> : <Login/> } />
              <Route path='/register'  element={ user ? <Navigate  to="/" /> : <Register/> } />
            </Routes>
          </Context.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
