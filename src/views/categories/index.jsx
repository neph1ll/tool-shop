import React from "react"; // Импорт библиотеки React
import { MainCategories } from "../main-categories/main-categories"; // Импорт компонента MainCategories
import "./categories.scss"; // Импорт файла стилей для компонента

// Компонент для отображения категорий
export const Categories = () => {
    return (
        <main className="categories"> {/* Основной контейнер для категорий, с классом "categories" для стилизации */}
            <MainCategories /> {/* Включение компонента MainCategories */}
        </main>
    );
};
