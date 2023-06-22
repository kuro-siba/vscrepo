const heading = document.querySelector('#heading');

const keyframes = {
  // opacity: [0, 1],
  // translate: ['0 50px',0],
  // color: ['#f00','#00f'],
  // fontSize: ['5px','100px'],
  // rotate: ['x 360deg', 0],
  // color: ['#f66','#fc2','#0c6','0bd']
  color: ['transparsent', '#fff'],
  backgroundPosition: ['100% 0','0 0'],
};
const options = {
  duration: 1000,
  // direction: 'alternate',
  // iterations: Infinity,
  // fill: 'forwards'
  easing: 'ease',
};

// heading:動かす要素
// keyframs:動かす内容
// options:再生時間

heading.animate(keyframes, options);