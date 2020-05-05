'use strict';

{
  //addEventListenerの第一引数はイベントの種類、第二引数は実行したい
  // 処理を関数やアロー関数で渡す
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    // targetNode.className = 'my-color';
    targetNode.className = 'my-color my-border';
  });
}
