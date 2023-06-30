// console.log('準備完了！');
// console.log(document.querySelector('#colorPicker'));
// console.log(document.querySelector('#colorPicker').value);
// document.querySelector('#colortext').textContent = `カラーコード：${document.querySelector('#colorPicker').value}`;
const text = document.querySelector('#colortext');
const color = document.querySelector('#colorPicker');

text.textContent = `カラーコード：${color.value}`;