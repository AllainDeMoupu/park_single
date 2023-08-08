console.log("Скрипт загружен");

let numPark;
let parkTime;


// Определение номера
// let autoNum = 'М 910 МТ 29'
// let autoNum = 'М 910 МТ 29'
// document.getElementById('auto-num').innerText = autoNum;

// Определение парковочного места, определяется через promt
// Теперь определяем через модальное окошко
// Пока все проверки номера места отключаю
function start() {
    cacl();
    let x = parseInt(numPark);
    document.getElementById("park-num").innerText = x;
    
};


// Выведем опеределение врмени и суммы в отдельную функцию
function cacl() {
    // Определение времени и суммы
    let money;

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let timePark = parseInt(parkTime);
    let finalTime = h + timePark;
    if (timePark === 1) {
        money = 100
    } else {
        money = 200
    };
    // Для тестов переворачиваем знак больше
    if (h == 18) {
        if (timePark == 1) {
            money = 100
        } else {
            money = (money / (timePark * 60 / (timePark * 60 - m))).toFixed(2)
        }
    } else if (h == 19) {
        timePark = 1;
        money = (100 / (60 / (60 - m))).toFixed(2);
    };
    if (m < 10) {
        m = "0" + m
    };

    let time = h + ":" + m;
    let time2 = (h+timePark) + ":" + m;
    console.log(time);
    console.log(time2);
    let allTime = `${money} ₽ c ${time} до ${time2}`;
    allTime = allTime.replace('.', ',');

    document.getElementById('time').innerText = allTime;
}



// Запрос на сервер номера авто
// function requestAuto() {
//     const request = new XMLHttpRequest();
//     request.open('GET', '/req_auto');
//     request.addEventListener('load', () => {
//         if (request.status === 200) {
//             if (request.response == "") {
//                 console.log("К нам пришла пустая строка");                
//             } else {
//                 const response = JSON.parse(request.response);
//                 autoNum = response
//                 document.getElementById('auto-num').innerText = autoNum;
//                 console.log(response)
//             };
//         } else {
//             console.log("Ответ от сервера не получен");
//         }
//     });
//     request.send();

// }

// requestAuto();

const contentNum = document.getElementById('content-num');
const contentTime = document.getElementById('content-time');
const modalNum = document.getElementById('modal-choose-num');
const modalTime = document.getElementById('modal-choose-time');
const overlay = document.getElementById('overlay');

const bntClose7807 = document.getElementById('btn-close7807');
const bntClose7808 = document.getElementById('btn-close7808');
const bntClose7809 = document.getElementById('btn-close7809');
const bntClose7810 = document.getElementById('btn-close7810');
const bntClose7812 = document.getElementById('btn-close7812');
const bntClose7810 = document.getElementById('btn-close7815');
const bntClose7812 = document.getElementById('btn-close7816');

const bntClose1 = document.getElementById('btn-close1');
const bntClose2 = document.getElementById('btn-close2');


const closeModal = () => {
    modalNum.style.display = 'none';
}

function chooseNumPark() {
    contentNum.innerHTML = "Выберете номер парковки";
    modalNum.style.display = 'block';

    bntClose7807.addEventListener('click', () => {
        numPark = 7807;
        chooseTime()
        modalNum.style.display = 'none';
    });
    bntClose7808.addEventListener('click', () => {
        numPark = 7808;
        chooseTime()
        modalNum.style.display = 'none';
    });
    bntClose7809.addEventListener('click', () => {
        numPark = 7809;
        chooseTime()
        modalNum.style.display = 'none';
    });
    bntClose7810.addEventListener('click', () => {
        numPark = 7810;
        chooseTime()
        modalNum.style.display = 'none';
    });
    bntClose7812.addEventListener('click', () => {
        numPark = 7812;
        chooseTime()
        modalNum.style.display = 'none';
    });
    bntClose7815.addEventListener('click', () => {
        numPark = 7815;
        chooseTime()
        modalNum.style.display = 'none';
    });
    bntClose7816.addEventListener('click', () => {
        numPark = 7816;
        chooseTime()
        modalNum.style.display = 'none';
    });
};

function chooseTime() {
    modalNum.style.display = 'none';
    contentTime.innerHTML = "Выберете время парковки";
    modalTime.style.display = 'block';

    bntClose1.addEventListener('click', () => {
        parkTime = 1;
        start();
        modalTime.style.display = 'none';
    });
    bntClose2.addEventListener('click', () => {
        parkTime = 2;
        start();
        modalTime.style.display = 'none';
    });    
};

chooseNumPark();
