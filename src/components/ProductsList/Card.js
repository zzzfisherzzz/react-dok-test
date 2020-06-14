import React from 'react';
import favorite from '../../img/favorite.svg'
import productImg from '../../img/oil.jpg'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import styles from "../ProductsList/ProductsList.module.css";

const url = 'https://dok.dbroker.com.ua/'

const Card = ({brand_name, product_title, available, rating, url_direct, rating_count,  price, product_image_alt}, product_id) => {
    return (
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
    );
};

export default Card;