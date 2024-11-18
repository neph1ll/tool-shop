import React, { useState, useContext } from "react"; // Импорт библиотеки React и хука useState
import styles from "./index.module.scss"; // Импорт CSS модулей для стилизации компонента
import { CartIcon, LogoIcon } from '../../assets/icons.jsx'; // Импорт иконок CartIcon и LogoIcon из папки assets/icons.jsx
import { IconCounter } from "../../components/icon-counter"; // Импорт компонента IconCounter для отображения счетчика иконок
import { NavLink } from "react-router-dom"; // Импорт компонента NavLink для создания навигационных ссылок
import cn from 'classnames'; // Импорт библиотеки classnames для удобного управления классами CSS

export const Navigation = () => {
  const [isToggleOn, setIsToggleOn] = useState(false); // Состояние для управления состоянием меню (открыто/закрыто)

  const onSwitchToggle = () => {
    setIsToggleOn((prev) => !prev); // Функция для переключения состояния меню
  };

  const getClassName = ({ isActive }) => isActive ? styles.active : ''; // Функция для получения класса стиля styles.active в зависимости от isActive

  return (
    <header className={styles.header}> {/* Основной контейнер заголовка с применением стилей из CSS модуля */}
      <div className={styles.iconWrapper}>
        <LogoIcon className={styles.logo} /> {/* Иконка логотипа с применением стиля styles.logo */}
      </div>
      <nav className={styles.navbar}> {/* Навигационное меню с применением стилей из CSS модуля */}
        <NavLink to='/' className={getClassName}>Main Page</NavLink> {/* Навигационная ссылка на главную страницу */}
        <NavLink to='/categories' className={getClassName}>Categories</NavLink> {/* Навигационная ссылка на страницу категорий */}
        <NavLink to='/products' className={getClassName}>All Products</NavLink> {/* Навигационная ссылка на страницу всех товаров */}
        <NavLink to='/all-sales' className={getClassName}>All Sales</NavLink> {/* Навигационная ссылка на страницу всех акций */}
      </nav>
      <div className={styles.heartCartWrapper}>
        <IconCounter count={4} > {/* Компонент IconCounter с счетчиком, отображающий количество товаров в корзине */}
          <CartIcon /> {/* Иконка корзины */}
        </IconCounter>
      </div>
    </header>
  );
};
