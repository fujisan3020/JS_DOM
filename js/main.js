'use strict';

{
  //addEventListenerの第一引数はイベントの種類、第二引数は実行したい
  // 処理を関数やアロー関数で渡す
  document.querySelector('button').addEventListener('click', () => {
    const item2 = document.createElement('li');
    item2.textContent = 'item 2';

    // const ulNode = document.querySelector('ul');
    const ul = document.querySelector('ul');
    ul.appendChild(item2);
    });
}
