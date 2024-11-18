import React, { useEffect, useState } from "react"; // Импорт библиотеки React и хуков (useEffect, useState)
import styles from "./product.module.scss"; // Импорт стилей из CSS модуля для компонента Product
import { BASE_URL } from "../../constants"; // Импорт базового URL из файла constants
import { useParams } from "react-router-dom"; // Импорт хука useParams из react-router-dom для доступа к параметрам маршрута
import { SingleItem } from "../../components/single-item/single-item"; // Импорт компонента SingleItem из его файла
import { getDiscountPercent } from "../../utils/getDiscountPercent"; // Импорт функции getDiscountPercent из утилит

export const Product = () => { // Объявление функционального компонента Product
  let { id } = useParams(); // Извлечение параметра id из маршрута с помощью хука useParams
  const [product, setProduct] = useState(); // Состояние для хранения информации о продукте

  const fetchData = async () => { // Функция для выполнения запроса данных о продукте
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`); // Отправка запроса на сервер для получения данных о продукте
      const data = await response.json(); // Преобразование ответа в формат JSON
      setProduct(data[0]); // Установка данных о продукте в состояние
      console.log('id ', id); // Вывод id продукта в консоль (для отладки)
      console.log(data); // Вывод полученных данных о продукте в консоль (для отладки)
    } catch (error) {
      console.log(error); // Обработка ошибок запроса и вывод их в консоль
    }
  };

  useEffect(() => {
    fetchData(); // Выполнение функции fetchData при монтировании компонента
    // fetch(`${BASE_URL}/products/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => setProduct(data));
  }, []); // Зависимость useEffect пустая, что указывает на то, что эффект нужно выполнить только при монтировании компонента

  if (!product) return <p>Loading...</p>; // Вывод сообщения о загрузке, пока продукт не загружен

  return (
    <section>
      <ul>
        <SingleItem
          price={product.price} // Передача цены продукта в компонент SingleItem
          title={product.title} // Передача заголовка продукта в компонент SingleItem
          description={product.description} // Передача описания продукта в компонент SingleItem
          image={BASE_URL + product.image} // Формирование URL изображения продукта и передача в компонент SingleItem
          discont_price={product.discont_price} // Передача цены со скидкой продукта в компонент SingleItem
          discountPercent={() => getDiscountPercent(product.price, product.discont_price)} // Передача функции расчета процента скидки в компонент SingleItem
        />
      </ul>
    </section>
  );
};
