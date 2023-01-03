const button = document.querySelector('.button')
const input = document.querySelector('input')
const text = document.querySelector('.textfrominput')

const url = 'https://picsum.photos/v2/list?limit='

button.addEventListener('click', () => {
    let num = input.value
    if(num >= 1 && num <= 10) {
        xhrRequest(`${url}` + num)
    } else {
        text.textContent = 'Число вне диапазона от 1 до 10'
    }
})

function xhrRequest(urls) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', urls, true)

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status)
        } else {
            const result = JSON.parse(xhr.response)
            console.log(result)
        }
    }

    xhr.onerror = function () {
        console.log('Ошибка! Статус ответа: ', xhr.status)
    }

    xhr.send()
}



