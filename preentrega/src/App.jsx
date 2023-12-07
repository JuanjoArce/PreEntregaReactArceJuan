import './App.css'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Celulares from './components/Celulares'
import Monitores from './components/Monitores'
import Error from './components/Error'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
   <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/categoria/:id' element={<ItemListContainer />}/>
      <Route path='/item/:id' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<CartWidget />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
