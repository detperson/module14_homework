const button = document.querySelector('.btn')
const inp1 = document.querySelector('.input1')
const inp2 = document.querySelector('.input2')
const textResult = document.querySelector('.textblock')
const imageResult = document.querySelector('.result')


// проверка localstorage, если есть картинки выводим их
if (Object.keys(localStorage).length > 0) {
    let keys = Object.keys(localStorage)
    for(let key of keys) {
        let resStorage = localStorage.getItem(key)
        // let imgFromStorage = `<img src="${resStorage}" height="200px">`
        imageResult.innerHTML += resStorage
    }
}

button.addEventListener('click', () => {
    let resultCheckInp1 = checkInp1()
    let resultCheckInp2 = checkInp2()

    if (resultCheckInp1 === 'bad1' && resultCheckInp2 === 'bad2') {
        textResult.innerText = 'Номер страницы и лимит вне диапазона от 1 до 10'
    } else if (resultCheckInp1 === 'bad1') {
        textResult.innerText = 'Номер страницы вне диапазона от 1 до 10'
    } else if (resultCheckInp2 === 'bad2') {
        textResult.innerText = 'Лимит вне диапазона от 1 до 10'
    } else {
        textResult.innerText = ''
        // console.log(`Делаем запрос на https://picsum.photos/v2/list?page=${inp1.value}&limit=${inp2.value}`)
        let url = `https://picsum.photos/v2/list?page=${inp1.value}&limit=${inp2.value}`
        fetchRequest(url)
    }
})

// функция проверки, Номер страницы в диапазоне 1-10
function checkInp1() {
    if (inp1.value >= 1 && inp1.value <= 10) {
        return inp1.value
    } else {
        let status = 'bad1'
        return status
    }
}

// функция проверки, Лимит в диапазоне 1-10
function checkInp2() {
    if (inp2.value >= 1 && inp2.value <= 10) {
        return inp2.value
    } else {
        let status = 'bad2'
        return status
    }
}

function fetchRequest(wayUrl) {
    fetch(wayUrl)
        .then((response) => {
            const result = response.json()
            // console.log('result после fetch запроса', result)
            return result
        })
        .then((data) => {
            // console.log('data', data)
            localStorage.clear()
            imageResult.innerHTML = ""
            data.forEach((element) => {
                let res = element.download_url
                // console.log(res)
                let img = `<img src="${res}" height="200em" alt="${element.author}">`
                imageResult.innerHTML += img
                localStorage.setItem(`urlImg${element.id}`, img)
            })
        })
        .catch(() => {
            console.log('error')
        })
}

