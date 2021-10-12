import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
/*componentes*/
import { NavBar } from './components/NavBar';



function App() {
  return (
    <div className='App'>
      <div className="App-header">
        <NavBar />
      </div>
      <section className='catalogue'>
        <ItemListContainer greeting="Acá va el catálogo de productos"  />
      </section>

    </div>
    
    
  );
}

export default App;
