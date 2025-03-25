import React, { useState } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import '../assets/css/Home.css';
import { Pizzas } from '../utils/Pizzas';

const Home = () => {
  const [listaPizzas, setListaPizzas] = useState(Pizzas);

  const renderPizza = listaPizzas.map((pizza) => {
    return (
      <CardPizza
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
      />
    );
  });

  return (
    <div className='Home'>
      <Header />
      <div className='card-container'>
        {renderPizza}
      </div>
    </div>
  );
};

export default Home;