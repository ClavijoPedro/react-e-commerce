import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

/*contexts*/
import {CartProvider} from './contexts/CartContext'

/*componentes*/
import {NavBar} from './components/NavBar'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer /> 
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
        </Switch>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
