import React from "react";
import Slider from "react-slick";
import productImg from '../../img/oil.jpg'
import styles from "../ProductsList/ProductsList.module.css";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import favorite from '../../img/favorite.svg'
import { Link, NavLink } from 'react-router-dom'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrow: true,
  centerPadding: '43px',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
};

const url = 'https://dok.dbroker.com.ua/'

const Card = ({cards}) => {
  return (
    <Slider {...settings} className={styles.products}>
    {cards.map(({ brand_name, product_title, available, rating, url_direct, rating_count,  price, product_image_alt }, product_id) => (
            <div key={product_id} className={styles.productCard}>
                  <span className={styles.productPhoto}>
                    <a href={`${url}${url_direct}`}>
                      <img src={productImg} alt={product_image_alt} />
                    </a>
                      <button className={styles.addToCard}>
                        <img src={favorite} />
                      </button>
                  </span>
                  <a href={`${url}${url_direct}`}>
                    <span className={styles.brandName}>{brand_name}</span>
                  </a>
                  <a href={`${url}${url_direct}`}>
                    <span className={styles.productTitle}>{product_title}</span>
                  </a>

                  <span className={styles.productRating}>
                      <span className={styles.raiting}>
                        {rating > 0  ? <Rater rating={rating} total={5} interactive={false} />  : null }
                      </span>
                      <span className={styles.recomendation}>
                        {rating_count > 0 ?  `(${rating_count} рекомендации)`  : null }
                      </span>
                  </span>                    

                <a href={`${url}${url_direct}`} className={styles.productCardBottom}>
                   <div className={styles.priceWrap}>
                       <div className={styles.price}>{price}<span className={styles.value}>грн</span></div>  
                       <span className={styles.available}>
                          {available > 0 ? 'Есть в наличии' : <span className={styles.onOrder}>Под заказ, 13 дней</span>}
                        </span>
                    </div> 
                   <a href={`${url}${url_direct}`} className={styles.buyBtn}>Купить</a>
                </a>
          </div>
        ))}
  </Slider>
  );
};

export default Card;





