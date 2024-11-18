import React from "react";
import styles from './index.module.scss';
import { NavLink } from "react-router-dom"; 

export const IconCounter = ({ count, children }) => {
  return (
      <div className={styles.wrapper}>
          {/* Навигационная ссылка на страницу корзины */}
          <NavLink to="/cart">
              {/* Элемент счетчика, отображающий количество элементов */}
              <div className={styles.count}>{count}</div>
              {/* Дочерние элементы компонента */}
              {children}
          </NavLink>
      </div>
  );
};
