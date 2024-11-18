import React, { useEffect, useState } from "react"; // Импорт необходимых хуков из библиотеки React
import { BASE_URL } from "../../constants"; // Импорт базового URL из констант
import { CardItem } from "../../components/card-item"; // Импорт компонента карточки товара
import styles from "./all-sales.module.scss"; // Импорт CSS модулей для стилизации компонента
import { SortField } from "../../components/sorted-field/sortField"; // Импорт компонента для сортировки и фильтрации

// Компонент для отображения всех товаров со скидкой
export const AllSales = () => {
  const [saleItems, setSaleItems] = useState([]); // Состояние для хранения всех товаров со скидкой
  const [filteredSaleItems, setFilteredSaleItems] = useState([]); // Состояние для хранения отфильтрованных товаров
  const [filters, setFilters] = useState({
    priceFrom: "", // фильтр по минимальной цене
    priceTo: "", // фильтр по максимальной цене
    discounted: false, // фильтр по наличию скидки
    sortBy: "default", // сортировка по умолчанию
  });

  // Эффект для получения данных о товарах со скидкой при монтировании компонента
  useEffect(() => {
    fetch(`${BASE_URL}/products/all`) // запрос на сервер для получения всех товаров
      .then((res) => res.json()) // преобразование ответа в JSON
      .then((data) => {
        setSaleItems(
          data.filter(({ discont_price }) => discont_price !== null) // фильтрация товаров, у которых есть скидка
        );
      });
  }, []); // пустой массив зависимостей, чтобы запрос выполнялся только один раз при монтировании

  // Эффект для фильтрации и сортировки товаров при изменении фильтров или списка товаров
  useEffect(() => {
    let filtered = saleItems;

    if (filters.priceFrom) { // фильтрация по минимальной цене
      filtered = filtered.filter((product) => product.price >= filters.priceFrom);
    }

    if (filters.priceTo) { // фильтрация по максимальной цене
      filtered = filtered.filter((product) => product.price <= filters.priceTo);
    }

    if (filters.discounted) { // фильтрация по наличию скидки
      filtered = filtered.filter((product) => product.discont_price);
    }

    // сортировка по выбранному критерию
    switch (filters.sortBy) {
      case "priceAsc":
        filtered.sort((a, b) => a.price - b.price); // сортировка по возрастанию цены
        break;
      case "priceDesc":
        filtered.sort((a, b) => b.price - a.price); // сортировка по убыванию цены
        break;
      case "alphabetically":
        filtered.sort((a, b) => a.name.localeCompare(b.name)); // сортировка в алфавитном порядке
        break;
      default:
        break;
    }

    setFilteredSaleItems(filtered); // обновление состояния отфильтрованных товаров
  }, [filters, saleItems]); // зависимости: фильтры и список товаров

  // Функция для изменения фильтров
  const handleFilterChange = (newFilter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilter,
    }));
  };

  return (
    <section className={styles.mainWrapper}> {/* основной контейнер секции */}
      <h1 className={styles.title}>All sales</h1> {/* заголовок секции */}

      <SortField
        className={styles.sortField} // CSS класс для стилизации поля сортировки
        filters={filters} // текущие фильтры
        onFilterChange={handleFilterChange} // обработчик изменения фильтров
        onSortChange={(sortBy) => handleFilterChange({ sortBy })} // обработчик изменения сортировки
      />

      <section className={styles.wrapper}> {/* контейнер для карточек товаров */}
        {filteredSaleItems.map((props) => ( // итерация по отфильтрованным товарам
          <CardItem
            key={props.id} // уникальный ключ для каждого товара
            {...props} // все свойства товара передаются в компонент карточки товара
          />
        ))}
      </section>
    </section>
  );
};
