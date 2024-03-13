import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import NavnavBar from './components/navbar/NavBar.jsx'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <NavnavBar/> 
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting="Bienvenidos a Pro-Shop Tennis"/>}/>
          <Route path='/category/:categoryId'element={<ItemListContainer/>}/>
          <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h2>404: Error de pagina</h2>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
