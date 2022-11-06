const background = ["01.png","02.jpg",'03.jpg'];

const bgImage = document.createElement("img");
bgImage.src = `img/${background[2]}`;
bgImage.classList = 'image';
console.log(bgImage);

document.body.appendChild(bgImage);
