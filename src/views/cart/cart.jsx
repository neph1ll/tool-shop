import React, { useContext, useState } from "react"; // Импорт хуков useContext и useState из React
import styles from "./cart.module.scss"; // Импорт CSS модулей для стилизации компонента
import { CartContext } from '../../components/context/cartContext'; // Импорт контекста корзины

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext); // Извлечение состояния корзины и функции для обновления корзины из контекста
  const [counts, setCounts] = useState(cart.map(() => 1)); // Инициализация состояния для хранения количества каждого товара

  const handleIncrement = (index) => {
    const newCounts = [...counts]; // Копирование текущего состояния количества товаров
    newCounts[index] += 1; // Увеличение количества выбранного товара
    setCounts(newCounts); // Обновление состояния
  };

  const handleDecrement = (index) => {
    const newCounts = [...counts]; // Копирование текущего состояния количества товаров
    if (newCounts[index] > 1) { // Проверка, чтобы количество товара было больше 1
      newCounts[index] -= 1; // Уменьшение количества выбранного товара
      setCounts(newCounts); // Обновление состояния
    }
  };

  const handleRemove = (index) => {
    const newCart = cart.filter(function(element, i) { // Фильтрация корзины, удаление товара по индексу
      return i !== index; // Условие фильтрации: сохранить элемент, если его индекс не равен индексу удаляемого элемента
    });
    const newCounts = counts.filter(function(element, i) { // Фильтрация количества товаров, удаление количества по индексу
      return i !== index; // Условие фильтрации: сохранить элемент, если его индекс не равен индексу удаляемого элемента
    });
    
    setCart(newCart); // Обновление состояния корзины
    setCounts(newCounts); // Обновление состояния количества товаров
  };

  const itemCount = counts.reduce((sum, count) => sum + count, 0); // Подсчет общего количества товаров в корзине
  const totalPrice = counts.reduce((sum, count, index) => sum + count * (cart[index].discont_price || cart[index].price), 0); // Подсчет общей стоимости товаров в корзине

  return (
    <>
      <h1 className={styles.cardTitle}>Shopping cart</h1> {/* Заголовок страницы корзины */}
      <section className={styles.wrapper}> {/* Основной контейнер для корзины */}
        <div className={styles.container}> {/* Контейнер для списка товаров */}
          <div className={styles.card}> {/* Карточка с товарами */}
            <ul>
              {cart.map(({ image, price, discont_price, title }, index) => ( // Перебор товаров в корзине
                <section key={index} className={styles.mainSection}> {/* Секция для каждого товара */}
                  <img src={image} alt="card" className={styles.cardImage} /> {/* Изображение товара */}
                  <div className={styles.countItemPriceConteiner}> {/* Контейнер для названия, цены и количества товара */}
                    <h3 className={styles.title}>
                      {title} {/* Название товара */}
                      <button className={styles.closeModule} onClick={() => handleRemove(index)}>X</button> {/* Кнопка для удаления товара */}
                    </h3>
                    <div className={styles.priceCounter}> {/* Контейнер для цены и счетчика количества */}
                      <div className={styles.counter}> {/* Счетчик количества товара */}
                        <button className={styles.plus} onClick={() => handleIncrement(index)}>+</button> {/* Кнопка для увеличения количества */}
                        <div className={styles.count}>{counts[index]}</div> {/* Отображение текущего количества товара */}
                        <button className={styles.minus} onClick={() => handleDecrement(index)}>-</button> {/* Кнопка для уменьшения количества */}
                      </div>
                      <div className={styles.prices}> {/* Контейнер для отображения цен */}
                      {discont_price && discont_price < price ? ( // если есть скидка, отображаем новую и старую цены
            <>
              <div className={styles.newPrice}>${discont_price}</div> {/* цена со скидкой */}
              <div className={styles.oldPrice}>${price}</div> {/* оригинальная цена */}
            </>
          ) : (
            <div className={styles.newPrice}>${price}</div> )} {/* если нет скидки, отображаем только текущую цену */}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.orderDetails}> {/* Контейнер для деталей заказа */}
          <div className={styles.details}> {/* Контейнер для информации о заказе */}
            <h4 className={styles.titleDetails}>Order details</h4> {/* Заголовок информации о заказе */}
            <p className={styles.itemCount}>{itemCount} items</p> {/* Общее количество товаров */}
            <p className={styles.totalPrice}>Total: 
              <p className={styles.totalPriceNum}>${totalPrice.toFixed(2)}</p> {/* Общая стоимость товаров */}
            </p>
          </div>

          <form action="" className={styles.form}> {/* Форма для ввода данных о покупателе */}
            <input type="text" placeholder="Phone" className={styles.input} /> {/* Поле ввода телефона */}
            <input type="text" placeholder="Number" className={styles.input} /> {/* Поле ввода номера */}
            <input type="text" placeholder="Email" className={styles.input} /> {/* Поле ввода email */}
            <button className={styles.button}>Submit</button> {/* Кнопка для отправки формы */}
          </form>
        </div>
      </section>
    </>
  );
};
