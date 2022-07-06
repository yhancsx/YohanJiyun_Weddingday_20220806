function randomMain() {
  const rand = getRandomInt(0, 10);

  const firstImage = document.querySelector('img.first');
  if (rand % 2 === 0) firstImage.src = 'https://yhancsx.github.io/YohanJiyun_Weddingday_20220806/images/001-1.png';
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

randomMain();
