import React from "react"; // Импорт библиотеки React
import styles from "./sortField.module.scss"; // Импорт CSS модулей для стилизации компонента

// Компонент для отображения поля фильтрации и сортировки
export const SortField = ({
  filters = { priceFrom: "", priceTo: "", discounted: false, sortBy: "default" }, // установка значений фильтров по умолчанию
  onFilterChange = () => { }, // обработчик изменения фильтров
  onSortChange = () => { }, // обработчик изменения сортировки
}) => {
  return (
    <div className={styles.filterSortWrapper}> {/* основной контейнер для фильтрации и сортировки */}
      <label> {/* метка для фильтрации по цене */}
        Price
        <input
          className={styles.priceFromTo} // CSS класс для стилизации поля ввода
          type="number" // тип ввода - числовой
          placeholder="from" // placeholder для поля ввода "от"
          value={filters.priceFrom} // текущее значение фильтра "от"
          onChange={(e) => onFilterChange({ priceFrom: e.target.value })} // обработчик изменения значения фильтра "от"
        />
        <input
          className={styles.priceFromTo} // CSS класс для стилизации поля ввода
          type="number" // тип ввода - числовой
          placeholder="to" // placeholder для поля ввода "до"
          value={filters.priceTo} // текущее значение фильтра "до"
          onChange={(e) => onFilterChange({ priceTo: e.target.value })} // обработчик изменения значения фильтра "до"
        />
      </label>
      <label className={styles.discont}> {/* метка для фильтрации по скидке */}
        Discounted products
        <input
          className={styles.discountOnOff} // CSS класс для стилизации чекбокса
          type="checkbox" // тип ввода - чекбокс
          checked={filters.discounted} // текущее значение фильтра по скидке
          onChange={(e) => onFilterChange({ discounted: e.target.checked })} // обработчик изменения значения фильтра по скидке
        />
      </label>
      <label> {/* метка для сортировки */}
        Sorting
        <select
          className={styles.selector} // CSS класс для стилизации выпадающего списка
          value={filters.sortBy} // текущее значение сортировки
          onChange={(e) => onSortChange(e.target.value)} // обработчик изменения значения сортировки
        >
          <option value="default">Default</option> {/* вариант сортировки по умолчанию */}
          <option value="priceAsc">Price Ascending</option> {/* вариант сортировки по возрастанию цены */}
          <option value="priceDesc">Price Descending</option> {/* вариант сортировки по убыванию цены */}
          <option value="alphabetically">Alphabetically</option> {/* вариант сортировки в алфавитном порядке */}
        </select>
      </label>
    </div>
  );
};
