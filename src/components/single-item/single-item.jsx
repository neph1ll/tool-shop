import React, { useState, useContext } from "react"; // Импорт необходимых хуков из библиотеки React
import styles from "./single-item.module.scss"; // Импорт CSS модулей для стилизации компонента
import { getDiscountPercent } from "../../utils/getDiscountPercent"; // Импорт функции для расчета процента скидки
import { CartContext } from '../context/cartContext'; // Импорт контекста корзины для добавления товаров в корзину

// Компонент для отображения одного товара
export const SingleItem = ({
  title, // название товара
  price, // цена товара
  description, // описание товара
  image, // изображение товара
  discont_price, // цена со скидкой на товар
}) => {
  const [count, setCount] = useState(1); // количество товара, устанавливаем начальное значение в 1

  const hasDiscount = discont_price && discont_price < price; // проверка, есть ли скидка на товар

  const { addItemToCart } = useContext(CartContext); // получение функции добавления товара в корзину из контекста

  // Обработчик добавления товара в корзину
  const handleAddToCart = () => {
    const item = { title, price, description, image, discont_price, count }; // создание объекта товара с его параметрами
    addItemToCart(item); // добавление товара в корзину
  };

  return (
    <div className={styles.wrapper}> {/* основной контейнер компонента */}
      <div className={styles.imgWrapper}> {/* контейнер для изображения */}
        <img src={image} className={styles.cardImage} alt="card" /> {/* изображение товара */}
      </div>

      <div className={styles.allInformationWrapper}> {/* контейнер для всей информации о товаре */}
        <h2 className={styles.title}>{title}</h2> {/* название товара */}

        <div className={styles.priceContainer}> {/* контейнер для отображения цены */}
          {hasDiscount ? ( // если есть скидка, отображаем текущую и оригинальную цену
            <>
              <span className={styles.currentPrice}>${discont_price}</span> {/* цена со скидкой */}
              <span className={styles.originalPrice}>${price}</span> {/* оригинальная цена */}
            </>
          ) : (
            <span className={styles.currentPrice}>${price}</span> 
          )} {/* если нет скидки, отображаем только текущую цену */}
          {hasDiscount && (
            <span className={styles.discountBadge}>
              -{getDiscountPercent(price, discont_price)}% {/* отображение процента скидки */}
            </span>
          )}
        </div>

        <div className={styles.counterWrapper}> {/* контейнер для счетчика количества товара */}
          
          <div className={styles.counter}> {/* контейнер для кнопок увеличения и уменьшения количества */}
            <button className={styles.plus} onClick={() => count > 1 && setCount(count - 1)}> {/* кнопка увеличения количества товара */}
              -
            </button>
            <p className={styles.count}>{count}</p> {/* отображение текущего количества товара */}
            <button
              className={styles.minus}
              onClick={() => setCount(count + 1)}>  {/* кнопка уменьшения количества товара, уменьшает только если количество больше 1 */}
              +
            </button>
          </div>

          <button className={styles.addToCart} onClick={handleAddToCart}> {/* кнопка добавления товара в корзину */}
            Add to cart
          </button>
        </div>

        <div className={styles.description}> {/* контейнер для описания товара */}
          <h3>Description</h3> {/* заголовок для описания */}
          <p className={styles.txtDescription}>{description}</p> {/* текст описания */}
        </div>
      </div>
    </div>
  );
};
