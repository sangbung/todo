const APIKEY = "4e4ff936294e874b2c7af885f7d9d322";



const success = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
    fetch(url).then(res => res.json()).then(data => {
        const weather = document.querySelector("#weatherBox span");
    
        weather.innerHTML = `${data.weather[0].main} / ${parseInt(data.main.temp - 273.15)} / ${data.name}`;    
    });
}

const err = () => {
    const weather = document.querySelector("#weatherBox span");
    weather.innerHTML = "Weather";
}

navigator.geolocation.getCurrentPosition(success,err);