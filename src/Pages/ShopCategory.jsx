import React, { useContext, useState } from 'react';
import { ShopContext } from '../Components/Context/Shopcontext';
import Item from '../Components/Item/Item';
import './ShopCategory.css';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOrder, setSortOrder] = useState('random');

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const sortProducts = (products, order) => {
    return products.slice().sort((a, b) => {
      const priceA = a.new_price;
      const priceB = b.new_price;
      return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
  };

  let filteredProducts = all_product.filter((item) => item.category === props.category);
  let sortedProducts;

  if (sortOrder === 'random') {
    sortedProducts = shuffleArray(filteredProducts);
  } else {
    sortedProducts = sortProducts(filteredProducts, sortOrder);
  }

  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>Ассортимент</p>
        <div className="shopcategory-sort">
          Sort by{' '}
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="random">Случайно</option>
            <option value="asc">По возрастанию цены</option>
            <option value="desc">По убыванию цены</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts.map((item) => (
          <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
        ))}
      </div>
      <div className="shopcategory-loadmore">Показать еще </div>
    </div>
  );
};

export default ShopCategory;
