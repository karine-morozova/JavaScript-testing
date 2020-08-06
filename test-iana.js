// function formatString(string, maxLength = 40) {
//   console.log(string.length);
//   if (string.length <= maxLength) {
//     console.log(string);
//   } else {
//     const newString = string.slice(0, maxLength);

//     console.log(newString + "...");
//   }
// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // 'Curabitur ligula sapien, tincidunt non.'
// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // 'Vestibulum facilisis, purus nec pulvinar...'
// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
// );
// // 'Vestibulum facilisis, purus ne...'
// function checkForSpam(message) {
//   const messageToLowerCase = message.toLowerCase();
//   if (
//     messageToLowerCase.includes("spam") ||
//     messageToLowerCase.includes("sale")
//   ) {
//     return true;
//   }
//   return false;
// }
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
// function mapArray(array) {
//   const numbers = new Array(array.length);

//   for (let i = 0; i < array.length; i += 1) {
//     numbers.push(array[i] * 10);
//   }
//   numbers.splice(0, array.length);

//   return numbers;
// }
// console.log(mapArray([-2, 0, 2]));
// //  [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]
// function reduceArray(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }

//   return total;
// }
// console.log(reduceArray([1, 2, 3]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5
function isLoginValid(login, min = 4, max = 16) {
  if (login.length >= min && login.length <= max) {
    return true;
  }
  return false;
}

function isLoginUnique(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }
  return true;
}

function addLogin(allLogins, login) {
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;

  if (!isLoginValid(login)) {
    message = ERROR;
    return message;
  } else if (!isLoginUnique(allLogins, login)) {
    message = REFUSAL;
    return message;
  } else {
    allLogins.push(login);
    message = SUCCESS;
    return message;
  }
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
