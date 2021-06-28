// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits

  for (let i = 0; i < fruits.length; i++) {
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild

    //создаем новый элемент li
    let fruitItemFruitViolet = document.createElement(`li`);
    //добавляем класс к новому элементу li
    fruitItemFruitViolet.classList.add(`fruit__item_fruit_violet`);
    // добавляем вновь созданный элемент в ul
    // fruitsList.appendChild(`fruitItemFruitViolet`);//

    // создаем новый элемент div с классом fruit__info
    let fruitInfo = document.createElement(`div`);
    //добавляем класс к новому элементу div
    fruitInfo.classList.add(`fruit__info`);

    // создаем новый элемент div с классом index_0
    let index0 = document.createElement(`div`);
    //добавляем класс к новому элементу div
    index0.classList.add(`index_0`);

    // создаем новый элемент div с классом kind_0
    let kind0 = document.createElement(`div`);
    //добавляем класс к элементу div
    kind0.classList.add(`kind_0`);

    let color0 = document.createElement(`div`);
    //добавляем класс к элементу div
    color0.classList.add(`color_0`);

    let weight0 = document.createElement(`div`);
    //добавляем класс к элементу div
    weight0.classList.add(`weight_0`);

    //Заполняем divs текстом://

    index0.textContent = `index: ${i}`;
    kind0.textContent = `kind: ${fruits[i].kind}`;
    color0.textContent = `color: ${fruits[i].color}`;
    weight0.textContent = `weight: ${fruits[i].weight}`;

    //добавляем  div/li/ul
    fruitInfo.appendChild(index0);
    fruitInfo.appendChild(kind0);
    fruitInfo.appendChild(color0);
    fruitInfo.appendChild(weight0);

    fruitItemFruitViolet.appendChild(fruitInfo);
    fruitsList.appendChild(fruitItemFruitViolet);

    //создаем новый элемент li
    let fruitItemFruitGreen = document.createElement(`li`);
    //добавляем класс к новому элементу li
    fruitItemFruitGreen.classList.add(`fruit__item fruit_green`);

    // создаем новый элемент div с классом fruit__info
    let fruitInfo = document.createElement(`div`);
    //добавляем класс к новому элементу div
    fruitInfo.classList.add(`fruit__info`);

    // создаем новый элемент div с классом index_0
    let index0 = document.createElement(`div`);
    //добавляем класс к новому элементу div
    index0.classList.add(`index_0`);

    // создаем новый элемент div с классом kind_0
    let kind0 = document.createElement(`div`);
    //добавляем класс к элементу div
    kind0.classList.add(`kind_0`);

    let color0 = document.createElement(`div`);
    //добавляем класс к элементу div
    color0.classList.add(`color_0`);

    let weight0 = document.createElement(`div`);
    //добавляем класс к элементу div
    weight0.classList.add(`weight_0`);

    //добавляем  div/li/ul
    fruitInfo.appendChild(index0);
    fruitInfo.appendChild(kind0);
    fruitInfo.appendChild(color0);
    fruitInfo.appendChild(weight0);

    fruitItemFruitGreen.appendChild(fruitInfo);
    fruitsList.appendChild(fruitItemFruitGreen);
  }
};

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let result = [];

  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length > 0) {
    // TODO: допишите функцию перемешивания массива
    //
    // Подсказка: находим случайный элемент из fruits, используя getRandomInt
    // вырезаем его из fruits и вставляем в result.
    // ex.: [1, 2, 3], [] => [1, 3], [2] => [3], [2, 1] => [], [2, 1, 3]
    // (массив fruits будет уменьшатся, а result заполняться)
  }

  fruits = result;
};

shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits.filter((item) => {
    // TODO: допишите функцию
  });
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});
