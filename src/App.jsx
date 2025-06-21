import './App.css';

import { useState } from 'react';

import Card from './assets/components/Card';
import products from './assets/db/data.jsx';
import Nav from './navigation/Nav';
import Products from './products/Products';
import Recommended from './recommended/Recommended';
import Sidebar from './sidebar/Sidebar';

function App() {
  // All state is applied to the App.jsx and sent out using props:
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Input search filter section:
  const [query, setQuery] = useState("");

  const inputChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // Radio button search section:
  const changeHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Button filtering:
  const clickHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Data filtering function:
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input items:
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying Selected filter:
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar changeHandler={changeHandler} />
      <Nav query={query} inputChangeHandler={inputChangeHandler} />
      <Recommended clickHandler={clickHandler} />
      <Products result={result} />
    </>
  );
}

export default App;
