/*
  Создать программу, которая будет выполнять следующие действия:

  - Циклом заполнить массив с помощью команды prompt в котором будет список из
    5-ти любых имен
  - Потом вывести с помощью prompt сообщение с просьбой ввести имя пользователя
  - Введенное имя, циклом сравнивать с именами в массиве
  - Если нет совпадения, то есть введенное имя пользователя не существует в
    массиве - выдавать с помощью alert сообщение об ошибке
  - Если есть совпадение - выводить сообщение "Андрей, вы успешно вошли". Вместо
   "Андрей" должно быть имя текущего пользователя
*/

var names = [];

for (var i = 0; i < 5; i++) {
  names[i] = prompt('Введите произвольное имя (' + (i + 1) + ' из 5)' ).trim();
}

var login = prompt('Введите имя пользователя').trim();

if (findLogin(names, login)) {
  alert(login + ', вы успешно вошли.');
} else {
  alert('Введенное имя пользователя не существует в массиве!');
}

/**
*
* @param users - array of user names
* @param login - user to be checked
*
*/
function findLogin(users, login) {
  var found = false;
  for (let name of names) {
    if (login === name) {
      found = true;
      break;
    }
  }
  return found;
}