import React, { useEffect, useState } from "react"; // Импорт библиотеки React и хуков (useEffect, useState)
import { BASE_URL } from "../../constants"; // Импорт базового URL из файла constants
import { CardItem } from "../../components/card-item"; // Импорт компонента CardItem из его файла
import styles from "./products.module.scss"; // Импорт стилей из CSS модуля для компонента Products
import { SortField } from "../../components/sorted-field/sortField"; // Импорт компонента SortField из его файла

export const Products = () => { // Объявление функционального компонента Products
  const [products, setProducts] = useState([]); // Состояние для хранения всех продуктов
  const [filteredProducts, setFilteredProducts] = useState([]); // Состояние для хранения отфильтрованных продуктов
  const [filters, setFilters] = useState({ // Состояние для хранения фильтров
    priceFrom: "",
    priceTo: "",
    discounted: false,
    sortBy: "default",
  });

  useEffect(() => { // Эффект для загрузки всех продуктов с сервера при монтировании компонента
    fetch(`${BASE_URL}/products/all`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []); // Пустая зависимость указывает, что эффект должен выполняться только один раз при загрузке компонента

  useEffect(() => { // Эффект для фильтрации и сортировки продуктов при изменении фильтров или списка продуктов
    let filtered = products; // Начальная фильтрация основана на полном списке продуктов

    if (filters.priceFrom) { // Фильтрация по минимальной цене
      filtered = filtered.filter((product) => product.price >= filters.priceFrom);
    }

    if (filters.priceTo) { // Фильтрация по максимальной цене
      filtered = filtered.filter((product) => product.price <= filters.priceTo);
    }

    if (filters.discounted) { // Фильтрация по наличию скидки
      filtered = filtered.filter((product) => product.discont_price);
    }

    switch (filters.sortBy) { // Сортировка продуктов в зависимости от выбранного метода сортировки
      case "priceAsc":
        filtered.sort((a, b) => a.price - b.price); // Сортировка по возрастанию цены
        break;
      case "priceDesc":
        filtered.sort((a, b) => b.price - a.price); // Сортировка по убыванию цены
        break;
      case "alphabetically":
        filtered.sort((a, b) => a.title.localeCompare(b.title)); // Сортировка по алфавиту (по названию)
        break;
      default:
        break;
    }

    setFilteredProducts(filtered); // Установка отфильтрованного списка продуктов в состояние
  }, [filters, products]); // Зависимость от изменений фильтров и списка всех продуктов

  const handleFilterChange = (newFilter) => { // Обработчик изменения фильтров
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilter,
    }));
  };

  return (
    <section className={styles.products}> {/* Верхний уровень раздела продуктов */}
      <h1 className={styles.title}>All products</h1> {/* Заголовок раздела */}

      <SortField // Компонент для отображения и управления фильтрами и сортировкой
        filters={filters}
        onFilterChange={handleFilterChange}
        onSortChange={(sortBy) => handleFilterChange({ sortBy })}
      />

      <section className={styles.wrapper}> {/* Обертка для отображения списка продуктов */}
        {filteredProducts.map((props) => ( // Отображение отфильтрованных продуктов в виде компонентов CardItem
          <CardItem key={props.id} {...props} />
        ))}
      </section>
    </section>
  );
};
