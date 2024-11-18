import React from "react"; // Импорт библиотеки React
import styles from "./hero.module.scss"; // Импорт CSS модулей для стилизации компонента

// Компонент для отображения главного баннера (Hero)
export const Hero = () => {
  return (
    <section className={styles.hero}> {/* Секция для главного баннера с применением стилей из CSS модуля */}
      <div className={styles.wrapper}> {/* Контейнер для заголовка и кнопки с применением стилей */}
        <h2 className={styles.title}>Amazing Discounts on&nbsp;Garden Products!</h2> {/* Заголовок баннера с применением стилей */}
        <button className={styles.button}>check out</button> {/* Кнопка с текстом "check out" и применением стилей */}
      </div>
    </section>
  );
};
