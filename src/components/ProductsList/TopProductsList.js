import React from "react";
import Slider from "react-slick";
import { sliderSettings } from  './SliderSettings'
import styles from "../ProductsList/ProductsList.module.css";
import Card from './Card.js'


const TopProductsList = ({cards}) => {
  return (
    <Slider {...sliderSettings} className={styles.products}>
      {cards.map(({ brand_name, product_title, available, rating, url_direct, rating_count,  price, product_image_alt }, product_id) => (
            <Card 
                product_id={product_id} 
                brand_name={brand_name} 
                product_title={product_title} 
                available={available} 
                rating={rating} 
                url_direct={url_direct} 
                rating_count={rating_count} 
                price={price} 
                product_image_alt={product_image_alt} 
            />
        ))} 
  </Slider>
  );
};

export default TopProductsList;





