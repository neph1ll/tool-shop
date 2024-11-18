import React, { createContext, useState, useEffect } from 'react';

// Создание контекста корзины
export const CartContext = createContext();

// Провайдер корзины
export const CartProvider = ({ children }) => {
  // Извлечение корзины из localStorage при первой загрузке
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);

  // Обновление localStorage каждый раз, когда корзина меняется
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Добавление товара в корзину
  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, setCart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};
