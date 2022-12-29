const button = document.querySelector('.button')
const inp1 = document.querySelector('.tapinput1')
const inp2 = document.querySelector('.tapinput2')

let url = 'https://picsum.photos/150/200'

button.addEventListener('click', () => {
    if (inp1.value>=100 && inp1.value<=300 && inp2.value>=100 && inp2.value<=300) {
         // console.log('Число в диапазоне')
        url = `https://picsum.photos/${inp1.value}/${inp2.value}`
        fetchRequest(url)
        document.querySelector('.textblock').innerText = ''
    } else {
        document.querySelector('.textblock').innerText = 'Одно из чисел вне диапазона от 100 до 300'
         // console.log('Текст когда число не подходит или не число')
    }
})

function fetchRequest(wayUrl) {
    fetch(wayUrl)
        .then((response) => {
            const result = response.url
            return result
        })
        .then((data) => {
            document.querySelector('.result').innerHTML = `<img src="${data}">`
        })
        .catch(() => {
            console.log('error')
        })
}

// тоже самое через async/await
// async function fetchRequest(wayUrl) {
//     try {
//         const response = await fetch(wayUrl)
//         const result = response.url
//         let data = document.querySelector('.result').innerHTML = `<img src="${result}">`
//     }
//     catch (e) {
//         console.error(e)
//     }
// }