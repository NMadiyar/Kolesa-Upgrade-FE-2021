import '../styles/main.scss';

document.querySelector('#app');

const clothes = [
    {
        id:    0,
        title: 'Футболка c котиком',
        price: 220,
        badge: true,
        img:   '/src/assets/image%204.png',
    },
    {
        id:    1,
        title: 'Бомбер',
        price: 230,
        badge: true,
        img:   '/src/assets/pics2.jpg',
    },
    {
        id:    2,
        title: 'Пуловер',
        price: 300,
        badge: false,
        img:   '/src/assets/pics3.jpg',
    },
    {
        id:    3,
        title: 'Штаны',
        price: 280,
        badge: false,
        img:   '/src/assets/pics3.jpg',
    },
    {
        id:    4,
        title: 'Шорты',
        price: 280,
        badge: false,
        img:   '/src/assets/pics4.jpg',
    },
    {
        id:    5,
        title: 'Юбка',
        price: 280,
        badge: false,
        img:   '/src/assets/pics4.jpg',
    },
    {
        id:    6,
        title: 'Классная футболка',
        price: 200,
        badge: false,
        img:   '/src/assets/pics330.jpeg',
    },
];

const accesories = [
    {
        id:    7,
        title: 'Классная кружка',
        price: 100,
        badge: true,
        img:   '/src/assets/pics5.jpg',
    },
    {
        id:    8,
        title: 'Зарядное устройство',
        price: 150,
        badge: true,
        img:   '/src/assets/pics6.jpg',
    },
    {
        id:    9,
        title: 'Powerbank',
        price: 90,
        badge: false,
        img:   '/src/assets/pics7.jpg',
    },
    {
        id:    10,
        title: 'Флешка',
        price: 50,
        badge: false,
        img:   '/src/assets/pics9.svg',
    },
    {
        id:    11,
        title: 'Блокнот',
        price: 30,
        badge: false,
        img:   '/src/assets/pics10.png',
    },
    {
        id:    12,
        title: 'Блокнот',
        price: 40,
        badge: false,
        img:   '/src/assets/pics10.png',
    },
    {
        id:    13,
        title: 'Флешка',
        price: 75,
        badge: false,
        img:   '/src/assets/pics9.svg',
    },
    {
        id:    14,
        title: 'Powerbank',
        price: 120,
        badge: false,
        img:   '/src/assets/pics7.jpg',
    },
];

const makeProductCard = (
    title,
    price,
    badge,
    img,
) => `   <div class="main--clothes__element">
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
                    <button type="button" class="main--clothes__btn">Заказать</button>
                </div>
            </div>`;

document.querySelectorAll('.js_radio').forEach((button) => {
    button.addEventListener('change', (event) => {
        const radioValue = event.target.value;

        if (radioValue === '3') {
            document.querySelector('.js_clothes').innerHTML = '';
            accesories.forEach((card) => {
                const {
                    title, price, badge, img,
                } = card;
                const cardHtml = makeProductCard(title, price, badge, img);

                document.querySelector('.js_clothes').innerHTML += cardHtml;
            });
        }

        if (radioValue === '2') {
            document.querySelector('.js_clothes').innerHTML = '';
            clothes.forEach((card) => {
                const {
                    title, price, badge, img,
                } = card;
                const cardHtml = makeProductCard(title, price, badge, img);

                document.querySelector('.js_clothes').innerHTML += cardHtml;
            });
        }

        if (radioValue === '1') {
            document.querySelector('.js_clothes').innerHTML = '';
            const allProducts = [...clothes, ...accesories];
            const newProducts = allProducts.filter(item => item.badge);
            const text = [...newProducts, ...clothes, ...accesories];

            text.forEach((card) => {
                const {
                    title, price, badge, img,
                } = card;
                const cardHtml = makeProductCard(title, price, badge, img);

                document.querySelector('.js_clothes').innerHTML += cardHtml;
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const allProducts = [...clothes, ...accesories];

    allProducts.forEach((card) => {
        const {
            title, price, badge, img,
        } = card;
        const cardHtml = makeProductCard(title, price, badge, img);

        document.querySelector('.js_clothes').innerHTML += cardHtml;
    });
});
