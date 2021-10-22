import { useEffect, useState } from 'react';
import './App.css';
import Products from './Products.json'

/*componentes*/
import { ItemCard } from './components/ItemCard';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';


function App() {

  const [item, setItem] = useState(null);  
  const getData = (data) => 
      new Promise((resolve,reject) => {
          setTimeout(() => {
              if(data){
                  resolve(data);
              }else{
                  reject("ERROR NO HAY PRODUCTOS");
              }  
          }, 2000);
      });

  useEffect(() => {
      getData(Products)
      .then(result => (setItem(result)))
      .catch((error) => console.log(error))
      .finally(console.log("item list printed"))
      
  }, []);

  return (
    <div className='App'>
      <div className="App-header">
        <NavBar />
      </div>
      <section className='itemList'>
        <ItemListContainer greeting="Productos">
          {item ? item.map(({image, name, price}) => 
            <ItemCard key={name} image={image} name={name} price={price} />
          ) : "loading..."}
        </ItemListContainer>
      </section>
    </div>
    
    
  );
}

export default App;
