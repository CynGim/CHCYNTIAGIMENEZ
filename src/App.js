import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import NavnavBar from './components/navbar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from "./components/cardWidget/CartWiget.jsx"
import { CartProvider } from './context/CartContext.jsx';
function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavnavBar/> 
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting="Bienvenidos a Pro-Shop Tennis"/>}/>
            <Route path='/category/:categoryId'element={<ItemListContainer/>}/>
            <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<h2>404: Error de pagina</h2>}/>
          </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;