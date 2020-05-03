'use strict';

{
  //addEventListenerの第一引数はイベントの種類、第二引数は実行したい
  // 処理を関数やアロー関数で渡す
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');
    targetNode.textContent = 'Changed!';
    //title属性の操作
    targetNode.title = 'This is title!';
    //style属性の操作
    // スタイルに関しては、 JavaScript でこのように書いてしまうと、 CSS との役割分担があいまいになるので、見た目の指定は CSS に任せて、 JavaScript では class 属性の操作だけを書く方法が一般的
    targetNode.style.color = 'red';
    targetNode.style.backgroundColor = 'skyblue';
  });
}
