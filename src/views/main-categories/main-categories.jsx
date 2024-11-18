import React, { useEffect, useState } from "react"; // Импорт библиотеки React и хуков useEffect, useState
import styles from "./main-categories.module.scss"; // Импорт CSS модулей для стилизации компонента
import { BASE_URL } from "../../constants"; // Импорт константы BASE_URL для работы с URL
import { CategoryCard } from "../../components/category-card/categoryCard.jsx"; // Импорт компонента CategoryCard для отображения карточек категорий

// Компонент MainCategories для отображения основных категорий
export const MainCategories = ({ hasButton, maxSize = Infinity }) => {
  const [categories, setCategories] = useState([]); // Состояние для хранения списка категорий

  useEffect(() => {
    fetch(`${BASE_URL}/categories/all`) // Запрос к серверу для получения всех категорий
      .then((res) => res.json()) // Преобразование ответа в формат JSON
      .then((data) => setCategories(data.slice(0, maxSize))); // Установка списка категорий, ограниченного по размеру maxSize
  }, []); // Пустой массив зависимостей означает, что useEffect будет запущен только при монтировании компонента

  return (
    <section className={styles.wrapperSection}> {/* Контейнерная секция для обертки компонента */}
      <h1 className={styles.title}>Categories</h1> {/* Заголовок "Categories" с применением стилей из CSS модуля */}

      <section className={styles.wrapper}> {/* Основной контейнер для категорий с применением стилей */}
        <header className={styles.header}>
          {/* {hasButton && <button className={styles.button}>All categories</button>} */}
        </header>

        <ul className={styles.categories}>
          {categories.map(({ id, image, title }) => (
            <CategoryCard id={id} key={id} image={BASE_URL + image} title={title} />
          ))}
        </ul>
      </section>
    </section>
  );
};
