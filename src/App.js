import React from 'react';
import './App.css'
import Section from './components/Section/Section'
import ProductsList from './components/ProductsList/ProductsList'
import TopProductsList from './components/ProductsList/TopProductsList'
import products from './services/products.json'

const App = () => {
  return (
    <div className="container">
      <Section title="Бестселлеры в категории автотовары и автохимия">
        <TopProductsList cards={products} />
      </Section>
      <Section title="Что-то новенькое">
        <ProductsList cards={products} />
      </Section>
    </div>
  );
};

export default App;