/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString)
// console.log('data', data)

// -----Исправления после проверки ментором-----
// const list = data.list
// // console.log('list', list)
// const person1 = list[0]
// const person2 = list[1]
// // console.log('person1', person1)
//
//
// /* Этап 3. Запись данных в результирующий объект */
// const result = {
//     list: [
//         {
//             name: person1.name,
//             age: Number(person1.age),
//             prof: person1.prof
//         },
//         {
//             name: person2.name,
//             age: Number(person2.age),
//             prof: person2.prof
//         },
//     ]
// }
// console.log('result', result)
console.log('result', data)
