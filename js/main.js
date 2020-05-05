'use strict';

{
  //addEventListenerの第一引数はイベントの種類、第二引数は実行したい
  // 処理を関数やアロー関数で渡す
  document.querySelector('button').addEventListener('click', () => {
    const item1 = document.querySelectorAll('li')[1];

    // item1.remove();
    // 親Node.removeChild(削除するNode)
    document.querySelector('ul').removeChild(item1);
  });
}
