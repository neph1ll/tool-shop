// src/RootRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./views/categories";
import { AllSales } from "./views/all-sales/all-sales.jsx";
import { Main } from "./views/main/main";
import { Layout } from "./views/layout";
import { NotFound } from "./views/not-found";
import { Products } from "./views/products/products.jsx";
import { Category } from "./views/category/category.jsx";
import { Product } from "./views/product/product.jsx";
import { Cart } from "./views/cart/cart.jsx";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="categories" element={<Categories />} />
        <Route path="all-sales" element={<AllSales />} />
        <Route path="category/:categoryId" element={<Category />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
