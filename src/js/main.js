/* eslint-disable radix */
import '../styles/main.scss';

document.querySelector('#app');

const clothes = [
    {
        id:      0,
        title:   'Футболка',
        price:   220,
        badge:   true,
        img:     '/src/assets/image%204.png',
        details: 'Топовая футболочка c разным видом описаний',
    },
    {
        id:      1,
        title:   'Бомбер',
        price:   230,
        badge:   true,
        img:     '/src/assets/pics2.jpg',
        details: 'Топовый бомбер',
    },
    {
        id:      2,
        title:   'Пуловер',
        price:   300,
        badge:   false,
        img:     '/src/assets/pics3.jpg',
        details: 'Топовый пуловер',
    },
    {
        id:      3,
        title:   'Штаны',
        price:   280,
        badge:   false,
        img:     '/src/assets/pics3.jpg',
        details: 'Топовые штаны',
    },
    {
        id:      4,
        title:   'Шорты',
        price:   280,
        badge:   false,
        img:     '/src/assets/pics4.jpg',
        details: 'Топовые шорты',
    },
    {
        id:      5,
        title:   'Юбка',
        price:   280,
        badge:   false,
        img:     '/src/assets/pics4.jpg',
        details: 'Топовая юбка',
    },
    {
        id:      6,
        title:   'Классная футболка',
        price:   200,
        badge:   false,
        img:     '/src/assets/pics330.jpeg',
        details: 'Топовая футболочка с котиком',
    },
];

const accesories = [
    {
        id:      7,
        title:   'Классная кружка',
        price:   100,
        badge:   true,
        img:     '/src/assets/pics5.jpg',
        details: 'Топовая кружка',
    },
    {
        id:      8,
        title:   'Зарядное устройство',
        price:   150,
        badge:   true,
        img:     '/src/assets/pics6.jpg',
        details: 'Зарядное устройство на все случаи жизни',
    },
    {
        id:      9,
        title:   'Powerbank',
        price:   90,
        badge:   false,
        img:     '/src/assets/pics7.jpg',
        details: 'Заряжает быстро и качественно',
    },
    {
        id:      10,
        title:   'Флешка',
        price:   50,
        badge:   false,
        img:     '/src/assets/pics9.svg',
        details: 'Флешка на 32гб',
    },
    {
        id:      11,
        title:   'Блокнот',
        price:   30,
        badge:   false,
        img:     '/src/assets/pics10.png',
        details: 'Блокноты с разными картинками',
    },
    {
        id:      12,
        title:   'Блокнот',
        price:   40,
        badge:   false,
        img:     '/src/assets/pics10.png',
        details: 'Блокноты с разными картинками',
    },
    {
        id:      13,
        title:   'Флешка',
        price:   75,
        badge:   false,
        img:     '/src/assets/pics9.svg',
        details: 'Флешка на 16гб',
    },
    {
        id:      14,
        title:   'Powerbank',
        price:   120,
        badge:   false,
        img:     '/src/assets/pics7.jpg',
        details: 'Пауэрбэнк на 10000MpA',
    },
];

const closeBtn = () => {
    document.querySelector('.js_close').addEventListener('click', (evt) => {
        if (evt.target.dataset.btn) {
            document.querySelector('.js_test').innerHTML = '';
        }
    });
};

const closeBtnModal = () => {
    document.querySelector('.js_modal_btn').addEventListener('click', (e) => {
        if (e.target.dataset.modalbtn) {
            document.querySelector('.js_test').innerHTML = '';
        }
    });
};

const makeProductCard = (
    title,
    price,
    badge,
    img,
    id,
) => `   <div data-key=${id} class="main--clothes__element js_card">
                <img src=${img} alt="clothes" width="330" height="330">
                <div class="main--clothes__textBlock">
                ${
                    badge
                        ? '<p class="main--clothes__new">\n                        NEW\n                    </p>'
                        : ''
                }
                    <p class="main--clothes__pts">${price} баллов</p>
                    <p class="main--clothes__text">${title}</p>
                    <p class="main--clothes__size">Размеры S/M/L </p>
                    <button type="button" class="main--clothes__btn js_btn">Заказать</button>
                </div>
            </div>`;

document.querySelectorAll('.js_radio').forEach((button) => {
    button.addEventListener('change', (event) => {
        const radioValue = event.target.value;

        if (radioValue === '3') {
            document.querySelector('.js_clothes').innerHTML = '';
            accesories.forEach((card) => {
                const {
                    title, price, badge, img, id,
                } = card;
                const cardHtml = makeProductCard(title, price, badge, img, id);

                document.querySelector('.js_clothes').innerHTML += cardHtml;

                // eslint-disable-next-line no-shadow
                document.querySelectorAll('.js_card').forEach((button) => {
                    button.addEventListener('click', () => {
                        const arr = [...accesories];
                        const currentItem = arr.filter(item => parseInt(item.id) === parseInt(button.dataset.key));

                        const {
                            // eslint-disable-next-line no-shadow
                            title, price, details, img, id,
                        } = currentItem[0];

                        // eslint-disable-next-line no-use-before-define
                        document.querySelector('.js_test').innerHTML += makeModalCard(title, price, details, img, id);
                        // eslint-disable-next-line no-use-before-define
                        closeBtn();
                        closeBtnModal();
                    });
                });
            });
        }

        if (radioValue === '2') {
            document.querySelector('.js_clothes').innerHTML = '';
            clothes.forEach((card) => {
                const {
                    title, price, badge, img, id,
                } = card;
                const cardHtml = makeProductCard(title, price, badge, img, id);

                document.querySelector('.js_clothes').innerHTML += cardHtml;

                // eslint-disable-next-line no-shadow
                document.querySelectorAll('.js_card').forEach((button) => {
                    button.addEventListener('click', () => {
                        const arr = [...clothes];
                        const currentItem = arr.filter(item => parseInt(item.id) === parseInt(button.dataset.key));

                        const {
                            // eslint-disable-next-line no-shadow
                            title, price, details, img, id,
                        } = currentItem[0];

                        // eslint-disable-next-line no-use-before-define
                        document.querySelector('.js_test').innerHTML += makeModalCard(title, price, details, img, id);
                        // eslint-disable-next-line no-use-before-define
                        closeBtn();
                        closeBtnModal();
                    });
                });
            });
        }

        if (radioValue === '1') {
            document.querySelector('.js_clothes').innerHTML = '';
            const allProducts = [...clothes, ...accesories];
            // eslint-disable-next-line array-callback-return,consistent-return
            const newProducts = allProducts.sort((a, b) => {
                if (a.badge > b.badge) {
                    return -1;
                }
            });

            newProducts.forEach((card) => {
                const {
                    title, price, badge, img, id,
                } = card;
                const cardHtml = makeProductCard(title, price, badge, img, id);

                document.querySelector('.js_clothes').innerHTML += cardHtml;

                // eslint-disable-next-line no-shadow
                document.querySelectorAll('.js_card').forEach((button) => {
                    button.addEventListener('click', () => {
                        const arr = [...clothes, ...accesories];
                        const currentItem = arr.filter(item => parseInt(item.id) === parseInt(button.dataset.key));

                        const {
                            // eslint-disable-next-line no-shadow
                            title, price, details, img, id,
                        } = currentItem[0];

                        // eslint-disable-next-line no-use-before-define
                        document.querySelector('.js_test').innerHTML += makeModalCard(title, price, details, img, id);
                        closeBtn();
                        closeBtnModal();
                    });
                });
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const allProducts = [...clothes, ...accesories];
    // eslint-disable-next-line consistent-return,array-callback-return
    const newProducts = allProducts.sort((a, b) => {
        if (a.badge > b.badge) {
            return -1;
        }
    });

    newProducts.forEach((card) => {
        const {
            title, price, badge, img, id,
        } = card;
        const cardHtml = makeProductCard(title, price, badge, img, id);

        document.querySelector('.js_clothes').innerHTML += cardHtml;
    });
});

const makeModalCard = (title, price, details, img, id) => ` <div data-key=${id} class="modal">
        <div class="modal__container">
            <div class="modal__image">
                <img src=${img} alt="shirt" width="330" height="330">
                <div class="modal__variations">
                    <input type="radio" id="img_radio1" name="img_radio" value="1">
                    <label for="img_radio1"><img src="src/assets/photo1.png" alt="clothes1" height="50" width="50"></label>
                    <input type="radio" id="img_radio2" name="img_radio" value="2" checked>
                    <label for="img_radio2"><img src="src/assets/photo2.png" alt="clothes2" height="50" width="50"></label>
                    <input type="radio" id="img_radio3" name="img_radio" value="3">
                    <label for="img_radio3"><img src="src/assets/photo3.png" alt="clothes3" height="50" width="50"></label>
                </div>
            </div>
            <div class="modal__content">
                <h1 class="modal__title">${title}</h1>
                <div class="modal__block">
                    <div>
                        <h2 class="modal__price">${price} баллов</h2>
                        <button data-modalbtn="modalBtn" class="modal__btn js_modal_btn" type="button" >Заказать</button>
                    </div>
                    <div class="modal__balance">
                        <div>
                            <p class="modal__text">Твой баланс:</p>
                            <p class='modal__pts'>50 баллов</p>
                        </div>
                        <div class="modal__bags">
                            <img src="src/assets/bags.png" alt="bags" width="40" height="41">
                        </div>
                    </div>
                </div>
                <p class="modal--info__text">Цвета:</p>
                <div class="modal--info__blockRadio">
                <div class="modal--info__radio">
                    <input id="info_radio1" name="info_radio"  type="radio" value="1" checked >
                    <label  for="info_radio1"><img src="src/assets/blue.svg" alt="blue" height="24" width="23">Синий</label>
                </div>
                <div class="modal--info__radio">
                        <input id="info_radio2" name="info_radio"  value="2" type="radio" >
                        <label  for="info_radio2"><img src="src/assets/whitish.svg" alt="whitish" width="23" height="24">Бежевый</label>
                </div>
                <div class="modal--info__radio">
                        <input id="info_radio3" name="info_radio"  value="3" type="radio" >
                        <label  for="info_radio3"><img src="src/assets/gray.svg" alt="gray" height="24" width="23">Серый</label>
                </div>
                </div>
                <p class="modal--info__text">Размер:</p>
                <div class="modal--info__blockSize">
                    <div class="modal--info__size">
                        <input id="size4" name="size"  type="radio" value="4" checked >
                        <label  for="size4">S</label>
                    </div>
                    <div class="modal--info__size">
                        <input id="size5" name="size"  value="5" type="radio" >
                        <label  for="size5">M</label>
                    </div>
                    <div class="modal--info__size">
                        <input id="size6" name="size"  value="6" type="radio" >
                        <label  for="size6">L</label>
                    </div>
                </div>
                <div class="modal--info__details">
                    <h2>Детали</h2>
                    <p>${details}</p>
                </div>
                <div class="modal--info__howTo">
                    <h2>Как выбрать размер:</h2>
                    <p>Написать дяде Рику для уточнения.</p>
                </div>
            </div>
            <button  class="modal__btn--close js_close" type="button"><img data-btn="closeBtn" src="src/assets/close-big.svg" width="32" height="32" alt="close"></button>
        </div>
  </div>`;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.js_card').forEach((button) => {
        button.addEventListener('click', () => {
            const arr = [...clothes, ...accesories];
            const currentItem = arr.filter(item => parseInt(item.id) === parseInt(button.dataset.key));

            const {
                title, price, details, img, id,
            } = currentItem[0];

            document.querySelector('.js_test').innerHTML += makeModalCard(title, price, details, img, id);
            closeBtn();
            closeBtnModal();
        });
    });
});
