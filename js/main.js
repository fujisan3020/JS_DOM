'use strict';

{
  function update() {
    //querySelector の場合は、セレクター、またはセレクターにidを設定し、それを指定する
    // document.querySelector('h1').textContent = 'Changed!';
    // document.querySelector('#target').textContent = 'Changed!';

    //getElementById を使用すれば、idを #なしで指定すれば良い。
    document.getElementById('target').textContent = 'Changed!';
    document.getElementById('igai').textContent = 'こんにちワンコ🐶';
  }

  setTimeout(update, 1000);
}
