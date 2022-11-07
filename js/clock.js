const Day = document.querySelector("#time p:first-child");
const Time = document.querySelector("#time p:last-child");

function Clock(){
    const today = new Date();
    const hour = String(today.getHours()).padStart(2,"0");
    const min = String(today.getMinutes()).padStart(2,"0");
    const sec = String(today.getSeconds()).padStart(2,"0");
    Time.innerHTML = `${hour}:${min}:${sec}`;
}

Clock();
setInterval(Clock,1000);

const today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
Day.innerHTML = `${year}/${month}/${date}`;