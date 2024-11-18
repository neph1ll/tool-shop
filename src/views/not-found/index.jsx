import React from "react"; // Импорт библиотеки React для создания компонентов
import { Link } from "react-router-dom"; // Импорт компонента Link из react-router-dom для создания ссылок
import styles from "./not-found.module.scss"; // Импорт стилей из CSS модуля для компонента NotFound

export const NotFound = () => { // Объявление функционального компонента NotFound
  return (
    <section className={styles.wrapper}> {/* Контейнер секции с применением стилей из CSS модуля */}
      <div className={styles.notFound}> {/* Контейнер для размещения содержимого страницы 404 с применением стилей */}
        <div className={styles.numbers}> {/* Контейнер для цифр "404" с применением стилей */}
          <div className={styles.num}>4</div> {/* Цифра "4" с применением стилей */}
          <div className={styles.num}>0</div> {/* Цифра "0" с применением стилей */}
          <div className={styles.num}>4</div> {/* Цифра "4" с применением стилей */}
        </div>
        <h2 className={styles.title}>Page not found</h2> {/* Заголовок "Page not found" с применением стилей */}
        <p className={styles.description}> {/* Параграф с описанием ошибки и применением стилей */}
          We’re sorry, the page you requested could not be found. Please go back to the homepage.
        </p>
        <Link to='/' className={styles.btn}>Go HOME!</Link> {/* Ссылка для перехода на главную страницу с применением стилей */}
      </div>
    </section>
  );
};
