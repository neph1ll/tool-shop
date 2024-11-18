import React from "react"; // Импорт библиотеки React
import styles from "./index.module.scss"; // Импорт CSS модулей для стилизации компонента
import { BASE_URL } from "../../constants"; // Импорт базового URL из констант
import { Link } from "react-router-dom"; // Импорт компонента Link из react-router-dom для навигации
import { getDiscountPercent } from "../../utils/getDiscountPercent"; // Импорт функции для расчета процента скидки

// Компонент карточки товара
export const CardItem = ({
  price, // цена товара
  title, // название товара
  image, // изображение товара
  discont_price, // цена товара со скидкой
  id // идентификатор товара
}) => {
  const hasDiscount = discont_price && discont_price < price; // проверка, есть ли скидка на товар

  return (
    <div className={styles.wrapper}> {/* основной контейнер карточки */}
      <div className={styles.imgWrapper}> {/* контейнер для изображения */}
        {hasDiscount && ( // если есть скидка, отображаем процент скидки
          <div className={styles.discount}>
            {getDiscountPercent(price, discont_price)}% {/* отображение процента скидки */}
          </div>
        )}
        <Link to={`/product/${id}`}> {/* ссылка на страницу товара по его идентификатору */}
          <img
            src={BASE_URL + image} 
            alt="card" 
            className={styles.cardImage} 
          />
        </Link>
      </div>
      <div className={styles.info}> {/* контейнер для информации о товаре */}
        <div className={styles.description}>{title}</div> {/* название товара */}
        <div className={styles.prices}> {/* контейнер для цен */}
          {hasDiscount ? ( // если есть скидка, отображаем новую и старую цены
            <>
              <div className={styles.newPrice}>${discont_price}</div> {/* цена со скидкой */}
              <div className={styles.oldPrice}>${price}</div> {/* оригинальная цена */}
            </>
          ) : (
            <div className={styles.newPrice}>${price}</div> )} {/* если нет скидки, отображаем только текущую цену */}
        </div>
      </div>
    </div>
  );
}
