'use strict';

{
  document.querySelector('ul').addEventListener('click', e => {

    //e.target.nodeName では，xmlの場合はdivやliなど要素名をそのまま返しますが，htmlの場合は要素名を大文字にして返すため，判定に利用する文字もそれに併せて大文字にしています．
    if (e.target.nodeName === 'LI') {
      e.target.classList.toggle('done');
    }
  });
}
