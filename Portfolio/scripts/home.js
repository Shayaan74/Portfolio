const typedText = document.getElementById('typed-text');
const words=[
  'Computer Science Student',
  'Front End Developer',
  'Problem Solver',
  'Code Enthusiast',
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typing() {

  const currentWord = words[wordIndex];

  if(isDeleting) {

    typedText.textContent = currentWord.substring(0, charIndex-1);
    charIndex--;

  } else {

    typedText.textContent = currentWord.substring(0,charIndex+1);
    charIndex++;

  }

  if (!isDeleting && charIndex === currentWord.length){

    setTimeout(() => isDeleting = true, 1500);

  } else if (isDeleting && charIndex === 0) {

    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;

  }

  setTimeout(typing, isDeleting ? 50 : 100);

}

typing();