
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop  from './Pages/Shop';
import { Footer } from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import AboutPage from './Pages/About'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/roses' element={<ShopCategory category="rose"/>}/>
      <Route path='/chris' element={<ShopCategory category="chrys"/>}/>
      <Route path='/gift' element={<ShopCategory category="gift"/>}/>
      <Route path='/home' element={<ShopCategory category="home"/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
