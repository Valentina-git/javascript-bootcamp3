/**
 * Критерии приема
Создан репозиторий goit-js-hw-08-gallery.
При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую страницу на GitHub pages.
При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и предупреждений.
Имена переменных и функций понятные, описательные.
Код отформатирован с помощью Prettier.
Задание
Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне. Превью результата посмотри по ссылке.

Превью

Разбей задание на несколько подзадач:

Создание и рендер разметки по массиву данных и предоставленному шаблону.
Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
Открытие модального окна по клику на элементе галереи.
Подмена значения атрибута src элемента img.lightbox__image.
Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
Стартовые файлы
В папке src ты найдешь стартовые файлы проекта с базовой разметкой и готовыми стилями.
В файле gallery-items.js есть массив объектов содержащих информацию о изображениях: маленькое изображение, оригинальное и описание.
Разметка элемента галереи
Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки (это необходимо для доступности).

<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>
Дополнительно
Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

Закрытие модального окна по клику на div.lightbox__overlay.
Закрытие модального окна по нажатию клавиши ESC.
Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
 */
//========================== JS__SHOW-MODAL =========================================
import galleryItems from './gallery-items.js';

const refs = {
    listGallery: document.querySelector('.js-gallery'),
    modal: document.querySelector('.js-lightbox'),
    imageModal: document.querySelector('.lightbox__image'),
    closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
    overlay: document.querySelector('.lightbox__overlay')
}

let indexCurrentImage;

refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.listGallery.addEventListener('click', onOpenModal);

function createLi({original, preview, description}, index)  {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    li.classList.add('gallery__item');
    a.classList.add('gallery__link');
    img.classList.add('gallery__image');

    a.href = original;
    img.src = preview;
    img.alt = description;
    
    img.setAttribute('data-source', original);
    img.setAttribute('data-index', index);

    a.append(img);
    li.append(a);

    return li;
};

function createGallery(galleryItems) {
    
    return galleryItems.map((liItem, index) => {

        return createLi({
            original: liItem.original,
            preview: liItem.preview,
            description: liItem.description
        }, index)
    })
}

refs.listGallery.append(...createGallery(galleryItems));


function onOpenModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }

    indexCurrentImage = Number(event.target.dataset.index)
    refs.modal.classList.add('is-open')

    refs.imageModal.src = event.target.dataset.source;
    refs.imageModal.alt = event.target.alt;

    refs.closeModalBtn.addEventListener('click', onCloseModal);
    refs.overlay.addEventListener('click', onCloseModal);
    window.addEventListener('keydown', onPressKey)
};

function onCloseModal() {
    refs.modal.classList.remove('is-open')
    refs.imageModal.src = ''
};

function onPressKey(event) { 
    switch (event.code) {
        case 'Escape':
            onCloseModal()
                break;
        
        case 'ArrowRight':
            indexCurrentImage + 1 === galleryItems.length
                ? indexCurrentImage = galleryItems.length - 1
                : indexCurrentImage += 1;
            refs.imageModal.src = galleryItems[indexCurrentImage].original
            break;
        
        case 'ArrowLeft':
            indexCurrentImage === 0
                ? indexCurrentImage = galleryItems.length - 1
                : indexCurrentImage -= 1;
            refs.imageModal.src = galleryItems[indexCurrentImage].original
            break;

        default:
            break;
    }
};

//========================== JS-GALLERY =========================================

/**
 * export default [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
 */

//========================== HTML =========================================

/**
 * <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Gallery Show-modal</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
      
    <!-- В этот список добавляй элементы галереи -->
    <ul class="gallery js-gallery"></ul>

    <!--
      Модальное окно для полноразмерного изображения
      Для того чтобы открыть, необходимо добавить на div.lightbox CSS-класс is-open
    -->
    <div class="lightbox js-lightbox">
      <div class="lightbox__overlay"></div>

      <div class="lightbox__content">
        <img class="lightbox__image" src="" alt="" />
      </div>

      <button
        type="button"
        class="lightbox__button"
        data-action="close-lightbox"
      ></button>
    </div>

    <script src="gallery-items.js" type="module"></script>
    <script src="./modal.js" type="module"></script>
  </body>
    </html>


 */
//=============================== CSS ============================================

/**
 * :root {
  --timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --animation-duration: 250ms;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  background-color: #fff;
  color: #212121;
}

.gallery {
  display: grid;
  width: 1200px;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-auto-rows: 240px;
  grid-gap: 12px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
}

.gallery__item {
  position: relative;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}

.gallery__image:hover {
  transform: scale(1.03);
}

.gallery__image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform var(--animation-duration) var(--timing-function);
}

.gallery__link {
  display: block;
  text-decoration: none;
  height: 100%;
}

.gallery__link:hover {
  cursor: zoom-in;
}

/* Lightbox */

/**
 * .lightbox {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--animation-duration) var(--timing-function);
}

.lightbox.is-open {
  opacity: 1;
  pointer-events: initial;
}

.lightbox__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
}

.lightbox__content {
  transform: scale(0.95);
  transition: transform var(--animation-duration) var(--timing-function);
}

.lightbox.is-open .lightbox__content {
  transform: scale(1);
}

.lightbox__image {
  display: block;
  width: auto;
  height: auto;
  max-height: 100vh;
  max-width: 100vw;
}

.lightbox__button {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  transition: background-color var(--animation-duration) var(--timing-function);
  outline: none;
  background-image: url('../images/icon-close.svg');
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
}

.lightbox__button:hover,
.lightbox__button:focus {
  background-color: rgba(0, 0, 0, 0.5);
}
 */

//=============================== IMG - icon-clos.svg ============================================

/**
 * <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"/>
<path d="M0 0h24v24H0z" fill="none"/></svg>
 */