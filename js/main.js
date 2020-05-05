'use strict';

{
  document.querySelector('button').addEventListener('dblclick', () => {
    console.log('Double Clicked!');
  });

  document.addEventListener('mousemove', e => {
    // console.log('moved!');

    //clientX 、 clientY: ブラウザの表示領域の左上を基準とした XY 座標
    console.log(e.clientX, e.clientY);
  });

  //押したキーボードの表示
  document.addEventListener('keydown', e => {
    console.log(e.key);
  });
}
