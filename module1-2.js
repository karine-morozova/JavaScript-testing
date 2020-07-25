// Использование тернарного оператора
// Напиши скрипт присвоения переменной message одной из двух строк в зависимости от количества товаров на складе с помощью тернарного оператора.

// Есть переменные

// stock = 100. Это количество товаров на складе.
//     invoice.Эта переменная - количество единиц товара в заказе.Переменной присваиваются только целые положительные числа(проверку на целые положительные числа делать не нужно).Рекомендуем рассмотреть поведение скрипта при трех значениях - 50 т.е.меньше чем stock, 100, т.е.равно stock и 150 - больше чем stock.
//         message.Это переменная для текста с ответом на запрос о покупке.Возможно два значения:
// "На складе недостаточно товаров!" если в заказе указано число, превышающее количество товаров на складе.
// "Заказ оформлен, с вами свяжется менеджер" в оставшихся случаях.
const invoice = 100;
const stock = 100;
let message;
if (invoice < stock) {
  message = "Заказ оформлен, с вами свяжется менеджер";
  console.log(message);
} else if (invoice === stock) {
  message = "Заказ оформлен, с вами свяжется менеджер";
  console.log(message);
} else {
  message = "На складе недостаточно товаров!";
  console.log(message);
}
