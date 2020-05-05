'use strict';

{
  const text = document.querySelector('textarea');

  text.addEventListener('focus', () => {
    console.log('focus');
  });

  //blur: フォーカスが外れた時のイベント
  text.addEventListener('blur', () => {
    console.log('blur');
  });

  //input : 内容が更新された時
  text.addEventListener('input', () => {
    // console.log('input');
    console.log(text.value.length);
  });

  //change: 更新が確定した時
  text.addEventListener('change', () => {
    console.log('change');
  });
}
