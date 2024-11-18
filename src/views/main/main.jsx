import React from "react"; // Импорт библиотеки React
import { Hero } from "../hero/hero"; // Импорт компонента Hero для отображения главного баннера
import { MainCategories } from "../main-categories/main-categories"; // Импорт компонента MainCategories для отображения основных категорий
import { MainForm } from "../main-form/main-form"; // Импорт компонента MainForm для отображения основной формы
import { MainSales } from "../main-sales/main-sales"; // Импорт компонента MainSales для отображения основных продаж

// Компонент Main для отображения основного содержимого страницы
export const Main = () => {
  return (
    <main> {/* Основной контейнер компонента */}
      <Hero/> {/* Компонент Hero для отображения главного баннера */}
      <MainCategories hasButton={true} maxSize={4}/> {/* Компонент MainCategories с пропсами hasButton и maxSize */}
      <MainForm/> {/* Компонент MainForm для отображения основной формы */}
      <MainSales/> {/* Компонент MainSales для отображения основных продаж */}
    </main>
  );
};
