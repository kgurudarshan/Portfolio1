// Text typing animation
const typedText = document.getElementById('typed-text');
const texts = ['web developer', 'designer', 'creative thinker', 'programmer'];
let index = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[index].length) {
    typedText.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index++;
    if (index >= texts.length) {
      index = 0;
    }
    setTimeout(type, 100);
  }
}

type();