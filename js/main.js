'use strict';

{
  //addEventListenerの第一引数はイベントの種類、第二引数は実行したい
  // 処理を関数やアロー関数で渡す
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    //className: クラス名を変更する
    // targetNode.className = 'my-color';

    //classList.add: クラス名を追加してくれる
    // targetNode.classList.add('my-color');

    //calssList.cotains:特定のクラスがついているか判別する
    //calssList.remove:特定のクラスを外す
    // if (targetNode.classList.contains('my-color')) {
    //   targetNode.classList.remove('my-color');
    // } else {
    //   targetNode.classList.add('my-color');
    // }

    //上記と同じ処理ができる
    targetNode.classList.toggle('my-color');
    });
}
