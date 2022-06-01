// Tu codigo JS va acá
let entrada = document.querySelector("#ciudad")
let ciudad = document.querySelector("#texto-ciudad")
let temp = document.querySelector("#temperatura")
let tiempo = document.querySelector("#pronostico")
let icono = document.querySelector("#icono")
let humedad = document.querySelector("#humedad")
let viento = document.querySelector("#viento")
 

const peticionClima = async () =>{
    let entrada = document.querySelector("#ciudad")
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${entrada.value}&appid=71c3cbde2aa16dd5598abe180bdb3aeb&units=metric`);
    const ciudades = await data.json()
    console.log(ciudades);
    ciudad.innerHTML = `${ciudades.name}`
    temp.innerHTML = `${ciudades.main.temp}`;
    tiempo.innerHTML = `${ciudades.weather[0].main}`
    humedad.innerHTML = `${ciudades.main.humidity}`
    viento.innerHTML = `${ciudades.wind.speed}`
    icono.innerHTML = icono.setAttribute("src", `http://openweathermap.org/img/w/${ciudades.weather[0].icon}.png`);
    entrada.value = ''
}
peticionClima()

