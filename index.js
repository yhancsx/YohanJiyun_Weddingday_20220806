function randomMain() {
  const rand = getRandomInt(0, 10);
  const imgPath = rand % 2 === 0 ? './images/001-1.png' : './images/001.png';

  const firstImage = document.querySelector('img.first');
  firstImage.src = imgPath;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

randomMain()