'use strict';

{
  function update() {
    //querySelector の場合は、セレクター、またはセレクターにidを設定し、それを指定する
    // document.querySelector('h1').textContent = 'Changed!';
    // document.querySelector('#target').textContent = 'Changed!';

    //getElementById を使用すれば、idを #なしで指定すれば良い。
    document.getElementById('target').textContent = 'Changed!';


    //querySelectorAllでセレクターの要素を全て選択でできる。
    //その上で、指定したい配列を選ぶ
    //全て要素を処理したい場合は、forEachを使う

    // document.querySelectorAll('p')[1].textContent = 'こんにちワンコ🐶';
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のpです！`;
    });

  }

  setTimeout(update, 1000);
}
