import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";


/*componentes*/
import {NavBar} from './components/NavBar'
import { ItemDetailContainer } from './components/ItemDetailContainer';
// import { ItemListContainer } from './components/ItemListContainer';



function App() {
  return (
    <div className='App'>
      <div className="App-header">
        <NavBar />
      </div>
      {/* <section className='itemList'>
        <ItemListContainer /> 
      </section> */}
      <section >
        <ItemDetailContainer /> 
      </section>
    </div>
  );
}

export default App;
