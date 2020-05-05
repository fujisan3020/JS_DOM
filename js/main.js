'use strict';

{
  //addEventListenerの第一引数はイベントの種類、第二引数は実行したい
  // 処理を関数やアロー関数で渡す
  document.querySelector('button').addEventListener('click', () => {
    const colors = document.querySelectorAll('input');
    const selectedColors = [];

    colors.forEach(color => {
      if (color.checked) {
        //pushメソッド: 配列の末尾に値を入れるメソッド
        selectedColors.push(color.value);
      }
    });

    const li = document.createElement('li');
    // li.textContent = selectedColors.join(',');
    li.textContent = selectedColors;
    document.querySelector('ul').appendChild(li);

  });
}
