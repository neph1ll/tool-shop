import React from "react"; // Импорт библиотеки React
import styles from "./main-form.module.scss"; // Импорт CSS модулей для стилизации компонента

// Компонент MainForm для отображения основной формы
export const MainForm = () => {
  return (
    <section className={styles.wrapper}> {/* Основной контейнер компонента с применением стилей из CSS модуля */}
      <div className={styles.titleWrapper}> {/* Обертка для заголовка с применением стилей */}
        <h2 className={styles.title}>5% off on the first order</h2> {/* Заголовок компонента */}
      </div>
      <div className={styles.divContainer}> {/* Контейнер для вложенных элементов с применением стилей */}
        <div className={styles.wrapperImg}></div> {/* Пустой блок для изображения с применением стилей */}
        <div className={styles.wrapperInputs}> {/* Обертка для инпутов с применением стилей */}
          <input type="text" placeholder="Name" className={styles.input} /> {/* Инпут для ввода имени с применением стилей */}
          <input type="text" placeholder="Phone number" className={styles.input} /> {/* Инпут для ввода номера телефона с применением стилей */}
          <input type="text" placeholder="Email" className={styles.input} /> {/* Инпут для ввода электронной почты с применением стилей */}
          <button className={styles.btn}>get a discount</button> {/* Кнопка "get a discount" с применением стилей */}
        </div>
      </div>
    </section>
  );
};
