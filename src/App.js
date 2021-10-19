import './App.css';
import { ItemCard } from './components/ItemCard';
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
        <ItemListContainer greeting="Productos">
          <ItemCard/>
        </ItemListContainer>
      </section>

    </div>
    
    
  );
}

export default App;
