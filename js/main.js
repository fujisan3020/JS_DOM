'use strict';

{
  //addEventListenerの第一引数はイベントの種類、第二引数は実行したい
  // 処理を関数やアロー関数で渡す
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');

    //inputで入力された値を取得
    const text = document.querySelector('input');
    //入力された値はvalue属性で取得できる
    li.textContent = text.value;
    document.querySelector('ul').appendChild(li);

    //入力欄をクリアし、フォーカスさせる
    text.value = '';
    text.focus();
  });
}
