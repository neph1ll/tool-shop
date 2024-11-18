import React from "react"; // Импорт библиотеки React для создания React компонентов
import { RootRoutes } from "./routes"; // Импорт компонента RootRoutes из файла routes.js

export const App = () => { // Объявление функционального компонента App
  return <RootRoutes/>; // Возвращение компонента RootRoutes, который рендерит маршруты приложения
};
