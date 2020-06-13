import React from 'react';
import './App.css'
import Section from './components/Section/Section'
import ProductsList from './components/ProductsList/ProductsList'
import products from './products.json'

const App = () => {
  return (
    <div className="container">
      <Section title="Бестселлеры в категории автотовары и автохимия">
        <ProductsList cards={products} />
      </Section>
      <Section title="Что-то новенькое">
        <ProductsList cards={products} />
      </Section>
    </div>
  );
};

export default App;