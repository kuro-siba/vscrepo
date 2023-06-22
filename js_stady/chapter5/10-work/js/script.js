const menu = document.querySelector('#menu');

// const strawberry = {
//     name: 'イチゴ',
//     img: 'strawberry.jpg',
//     price: 450,
// };
// console.log(strawberry.name);
// console.log(strawberry['img']);

// const key = 'name';
// console.log(strawberry.key);
// console.log(strawberry[key]);

// const lists = [
//     'strawberry.jpg',
//     'lime.jpg',
//     'mango.jpg',
//     'lemon.jpg',
//     'fig.jpg',
//     'apple.jpg',
// ];

const lists = [
    {
        name : 'イチゴ',
        img : 'strawberry.jpg',
        price : 450,
    },
    {
        name : 'ライム',
        img : 'lime.jpg',
        price : 400,
    },
    {
        name : 'マンゴー',
        img : 'mango.jpg',
        price : 500,
    },
    {
        name : 'レモン',
        img : 'lemon.jpg',
        price : 400,
    },
    {
        name : 'イチジク',
        img : 'fig.jpg',
        price : 500,
    },
    {
        name : 'リンゴ',
        img : 'apple.jpg',
        price : 400,
    },
];

// console.log(lists[0].name);

for(let i = 0; i < lists.length; i++){
    // const name = lists[i].name;
    // const img = lists[i].img;
    // const price = lists[i].price;

    const {name, img, price} = lists[i];

    const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}円</p></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}