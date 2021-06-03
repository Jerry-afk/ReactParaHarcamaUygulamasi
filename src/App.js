import './App.css';
import Header from './components/header'
import {useState,
        useEffect} from 'react'
import products from './products.json'
import Product from './components/Product'


function App() {
  const [money , setMoney] = useState(185000000000)
  const [basket, setBasket] = useState([])

  return (
    <>
    <Header money={money}/>
    <div className="container products">
    {products.map(product => (
      <Product key={product.id} basket={basket} setBasket= {setBasket} money={money} setMoney={setMoney} product={product}/>
    ))}</div>
    </>
  );
}

export default App;
