const loginForm = document.querySelector("#loginForm");
const nickname = document.querySelector("#nicknameBox");
const snowingBtn = document.querySelector("#snow");

const HIDDEN = 'hidden';
const USERNAME = 'username';

const painting = () => {
    const username = localStorage.getItem(USERNAME);
    nickname.innerHTML = `Hello ${username}`;
    nickname.classList.remove(HIDDEN);
    snowingBtn.classList.remove(HIDDEN);
}

const handleForm = (event) => {
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginForm.querySelector("input").value;
    localStorage.setItem(USERNAME,username);
    painting();
}

const saveUsername = localStorage.getItem(USERNAME);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit",handleForm);
} else {
    painting();
}

const handleSnowing = () => {
    const snowBox = document.querySelector("#snowBox");
    snowBox.classList.toggle(HIDDEN);
}

snowingBtn.addEventListener("click",handleSnowing);