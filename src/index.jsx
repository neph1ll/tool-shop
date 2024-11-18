import React from "react"; // Импорт библиотеки React для создания React компонентов
import ReactDOM from "react-dom/client"; // Импорт метода createRoot из ReactDOM для создания корня приложения
import { App } from "./app.jsx"; // Импорт компонента App из файла app.jsx
import "./index.css"; // Импорт файла стилей index.css
import { BrowserRouter } from "react-router-dom"; // Импорт компонента BrowserRouter из react-router-dom для обработки маршрутизации
import { Provider } from "react-redux"; // Импорт компонента Provider из react-redux для обеспечения доступа к Redux store
// import { store } from "./store/index.js"; // Комментарий: закомментирован импорт store из файла store/index.js
import { CartProvider } from "./components/context/cartContext.js"; // Импорт компонента CartProvider из файла cartContext.js

const root = ReactDOM.createRoot(document.getElementById("root")); // Создание корня приложения с помощью метода createRoot из ReactDOM, получая доступ к элементу с id "root"
root.render( // Рендеринг корневого элемента приложения
  <CartProvider> 
      <BrowserRouter> 
        <App /> 
      </BrowserRouter>
  </CartProvider>
);
