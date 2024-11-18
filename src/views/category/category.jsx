import React, { useEffect, useState } from "react"; // Импорт необходимых хуков из библиотеки React
import { useParams } from "react-router-dom"; // Импорт хука useParams из react-router-dom для получения параметров URL
import { BASE_URL } from "../../constants"; // Импорт базового URL для API запросов
import { CardItem } from "../../components/card-item"; // Импорт компонента CardItem для отображения товаров
import styles from "./category.module.scss"; // Импорт CSS модулей для стилизации компонента
import { SortField } from "../../components/sorted-field/sortField"; // Импорт компонента SortField для фильтрации и сортировки

// Компонент для отображения категории товаров
export const Category = () => {
  const { categoryId } = useParams(); // Получение параметра categoryId из URL
  const [category, setCategory] = useState({}); // Состояние для хранения данных категории
  const [products, setProducts] = useState([]); // Состояние для хранения списка товаров в категории
  const [filters, setFilters] = useState({
    priceFrom: "", // Фильтр для минимальной цены
    priceTo: "", // Фильтр для максимальной цены
    discounted: false, // Фильтр для товаров со скидкой
    sortBy: "default", // Параметр сортировки
  });
  const [filteredProducts, setFilteredProducts] = useState([]); // Состояние для хранения отфильтрованных товаров

  useEffect(() => {
    fetch(`${BASE_URL}/categories/${categoryId}`) // Запрос к API для получения данных о категории
      .then((res) => res.json()) // Преобразование ответа в JSON
      .then(({ category, data }) => { // Обработка полученных данных
        setCategory(category); // Установка данных категории
        setProducts(data); // Установка списка товаров
      });
  }, [categoryId]); // Зависимость эффекта от categoryId

  useEffect(() => {
    let filtered = products; // Изначально используем все товары

    if (filters.priceFrom) {
      filtered = filtered.filter((product) => product.price >= filters.priceFrom); // Фильтрация по минимальной цене
    }

    if (filters.priceTo) {
      filtered = filtered.filter((product) => product.price <= filters.priceTo); // Фильтрация по максимальной цене
    }

    if (filters.discounted) {
      filtered = filtered.filter((product) => product.discont_price); // Фильтрация по наличию скидки
    }

    switch (filters.sortBy) { // Сортировка в зависимости от выбранного параметра
      case "priceAsc":
        filtered.sort((a, b) => a.price - b.price); // Сортировка по возрастанию цены
        break;
      case "priceDesc":
        filtered.sort((a, b) => b.price - a.price); // Сортировка по убыванию цены
        break;
      case "alphabetically":
        filtered.sort((a, b) => a.title.localeCompare(b.title)); // Сортировка по алфавиту
        break;
      default:
        break;
    }

    setFilteredProducts(filtered); // Установка отфильтрованных товаров
  }, [filters, products]); // Зависимости эффекта от filters и products

  // Функция для изменения фильтров
  const handleFilterChange = (newFilter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilter,
    }));
  };

  return (
    <section className={styles.mainWrapper}> {/* Основной контейнер для категории */}
      <h1 className={styles.title}>{category.title}</h1> {/* Заголовок категории */}
      <SortField
        filters={filters}
        onFilterChange={handleFilterChange}
        onSortChange={(sortBy) => handleFilterChange({ sortBy })}
      /> {/* Компонент для фильтрации и сортировки */}
      <section className={styles.wrapper}>
        <ul className={styles.products}> {/* Контейнер для списка товаров */}
          {
            filteredProducts.map((props) => ( // Перебор отфильтрованных товаров
              <CardItem
                key={props.id}
                {...props} // Передача свойств товара в компонент CardItem
              />
            ))
          }
        </ul>
      </section>
    </section>
  );
};
