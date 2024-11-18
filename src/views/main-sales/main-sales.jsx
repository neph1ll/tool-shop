import React, { useEffect, useState } from "react"; // Импорт библиотеки React и хуков useEffect, useState
import { CardItem } from "../../components/card-item"; // Импорт компонента CardItem для отображения карточек товаров
import { BASE_URL } from "../../constants"; // Импорт константы BASE_URL для работы с URL
import styles from "./index.module.scss"; // Импорт CSS модулей для стилизации компонента
import { getDiscountPercent } from "../../utils/getDiscountPercent"; // Импорт функции getDiscountPercent для вычисления процента скидки

// Компонент MainSales для отображения акционных товаров
export const MainSales = () => {
  const [saleItems, setSaleItems] = useState([]); // Состояние для хранения списка акционных товаров

  useEffect(() => {
    fetch(`${BASE_URL}/products/all`) // Запрос к серверу для получения всех товаров
      .then((res) => res.json()) // Преобразование ответа в формат JSON
      .then((data) => {
        setSaleItems(
          data
            .sort(
              (elem, elem2) =>
                getDiscountPercent(elem2.price, elem2.discont_price) - // Сортировка товаров по убыванию процента скидки
                getDiscountPercent(elem.price, elem.discont_price)
            )
            .filter(
              ({ discont_price }, index) => discont_price !== null && index < 4 // Фильтрация товаров: только те, у которых есть скидка и ограничение до 4 элементов
            )
        );
      });
  }, []); // Пустой массив зависимостей означает, что useEffect будет запущен только при монтировании компонента

  return (
    <section className={styles.wrapper}> {/* Контейнерная секция для обертки компонента с применением стилей из CSS модуля */}
      <h1 className={styles.title}>Sales</h1> {/* Заголовок "Sales" с применением стилей из CSS модуля */}
      <ul className={styles.sales}>
        {saleItems.map(({ price, discont_price, description, image, id, title }) => (
          <CardItem
            title={title}
            key={id}
            price={price}
            discont_price={discont_price}
            discontPercent={getDiscountPercent(price, discont_price)} // Вычисление процента скидки для каждого товара
            description={description}
            image={image}
            id={id}
          />
        ))}
      </ul>
    </section>
  );
};
