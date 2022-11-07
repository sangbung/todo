const background = ["01.png","02.jpg",'03.jpg'];

const bgImage = document.createElement("img");
const n = Math.floor(Math.random()*background.length);
bgImage.src = `img/${background[n]}`;
bgImage.classList = 'image';


document.body.appendChild(bgImage);
