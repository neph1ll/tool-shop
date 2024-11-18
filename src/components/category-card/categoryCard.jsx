// Импортируем React и компонент Link из react-router-dom
import React from "react";
import { Link } from "react-router-dom";

// Импортируем CSS-модуль для стилизации компонента CategoryCard
import styles from './category-card.module.scss';

// Определяем компонент CategoryCard
export const CategoryCard = ({ image, title, id }) => {
  // Этот компонент представляет собой карточку категории в списке категорий
  return (
    // Карточка является элементом списка с ссылкой на страницу категории
    <li className={styles.card}>
      <Link to={`/category/${id}`}>
        {/* Изображение категории */}
        <img src={image} className={styles.image} />
        {/* Название категории */}
      </Link>
      <h4 className={styles.title}>{title}</h4>

    </li>
  )
}
