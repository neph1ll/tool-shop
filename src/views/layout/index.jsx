import React from "react"; // Импорт библиотеки React
import { Outlet } from "react-router-dom"; // Импорт компонента Outlet из react-router-dom для отображения вложенных маршрутов
import { Footer } from "../footer/footer"; // Импорт компонента Footer для отображения нижнего колонтитула
import { Navigation } from "../navigation/navigation"; // Импорт компонента Navigation для отображения навигационного меню

// Компонент Layout для общего макета страницы
export const Layout = () => {
  return (
    <main> {/* Основной контейнер компонента */}
      <Navigation/> {/* Компонент навигационного меню */}
      <Outlet/> {/* Компонент Outlet для отображения вложенных маршрутов */}
      <Footer /> {/* Компонент нижнего колонтитула */}
    </main>
  );
};
