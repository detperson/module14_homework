/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

// XML, который мы будем парсить
const xmlString = `
    <list>
      <student>
        <name lang="en">
          <first>Ivan</first>
          <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
      </student>
      <student>
        <name lang="ru">
          <first>Петр</first>
          <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
      </student>
    </list>
`;
// console.log('xmlString', xmlString);

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDom = parser.parseFromString(xmlString, 'text/xml')

// Получение всех DOM-нод
const listNode = xmlDom.querySelector('list')
const student1Node = listNode.querySelectorAll('student')[0]
const student2Node = listNode.querySelectorAll('student')[1]
const nameSt1Node = student1Node.querySelector('first')
const secondNameSt1Node = student1Node.querySelector('second')
const ageSt1Node = student1Node.querySelector('age')
const profSt1Node = student1Node.querySelector('prof')

const nameSt2Node = student2Node.querySelector('first')
const secondNameSt2Node = student2Node.querySelector('second')
const ageSt2Node = student2Node.querySelector('age')
const profSt2Node = student2Node.querySelector('prof')


// console.log('listNode', listNode)
// console.log('student2Node', student2Node)
// console.log('secondNameSt2Node', secondNameSt2Node)
// console.log('ageSt1Node', ageSt2Node)

// Получение данных из атрибутов
const langSt1Attr = student1Node.querySelector('name').getAttribute('lang')
const langSt2Attr = student2Node.querySelector('name').getAttribute('lang')
// console.log('langSt2Attr', langSt2Attr)

/* Этап 3. Запись данных в результирующий объект */

const result = {
    list: [
            {
                name: `${nameSt1Node.textContent} ${secondNameSt1Node.textContent}`,
                age: Number(ageSt1Node.textContent),
                prof: profSt1Node.textContent,
                lang: langSt1Attr
            },
            {
                name: `${nameSt2Node.textContent} ${secondNameSt2Node.textContent}`,
                age: Number(ageSt2Node.textContent),
                prof: profSt2Node.textContent,
                lang: langSt2Attr
            },
    ]
}

console.log('result', result)

