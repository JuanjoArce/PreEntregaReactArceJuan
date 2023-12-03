import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ProductCards from './components/ProductCards/ProductCards'

function App() {

  return (
   <div className="App">
    <NavBar/>
    <ItemListContainer greeting='Bienvenidos'/>
    <ProductCards title='Producto 1' price={999,99} img={}>
    <p>Aprovecha este producto</p>
    <button>Comprar ya</button>
    </ProductCards>
    <ProductCards title='Producto 2' price={999,99} img={}>
    <p>Aprovecha este producto</p>
    <button>Agregar a favoritos</button>
    </ProductCards>
   </div>
  )
}

export default App
