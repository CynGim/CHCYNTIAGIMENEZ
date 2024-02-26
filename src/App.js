import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import CollapsibleExample from './components/navbar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div>
        <CollapsibleExample/> 
        <ItemListContainer greeting="Bienvenidos a Pro-Shop Tennis"/> 
    </div>
  );
}

export default App;
