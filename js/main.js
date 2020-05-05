'use strict';

{
  //addEventListenerの第一引数はイベントの種類、第二引数は実行したい
  // 処理を関数やアロー関数で渡す
  document.querySelector('button').addEventListener('click', () => {
    const item0 = document.querySelectorAll('li')[0];
    //cloneNode(): Nodeを複製する命令。
    //            (true)で要素の中身も複製、(false)で中身は複製しない
    const copy = item0.cloneNode(true);

    const ul = document.querySelector('ul');
    const item2 = document.querySelectorAll('li')[2];
    //insertBefore(): 何らかの要素を指定した要素の前に入れる
    //                (入れる要素, どの要素の前に入れるか)
    ul.insertBefore(copy, item2);
  });
}
