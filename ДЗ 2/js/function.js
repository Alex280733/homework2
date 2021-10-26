
// Напишіть функцію isEmpty(obj),яка повертає true,якщо у об'єкта немає властивостей, по іншому функція повинна повертати  false.
// Чи можливо змінити об'єкт, який об'явлено за допомогою  const? Як ви вважаєте?
const obj = {}

function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
}

//Об'єкт змінити можна, але змінну const ні.


// Є  об'єкт, в якому є зар плати нашої комнади:
//  Напишіть код сумми всіх зар плат та збережіть у змінній переменной sum. Должно получиться 390.

let salaries = {
    Leo: 100,
    Dony: 100,
    Raph: 100,
    Mickey: 90
}

let valArr = Object.values(salaries);
let sum = 0;
for(let i = 0; i <= valArr.length - 1; i++){
    sum = sum + valArr[i];
}

if (Object.keys(salaries).length === 0) {
    sum = 0;
    console.log(sum);
} else{
    console.log(sum);
}