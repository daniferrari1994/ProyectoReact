import './App.scss';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainter/index.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/index.jsx';
import NotFound from './components/notFound';
import CartContainer from './components/CartContainer/index.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/brandname/:id' element = {<ItemListContainer/>}/>
        <Route path='/item/:id' element = {<ItemDetailContainer/>}/>
        <Route path = '*' element = {<NotFound/>} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
