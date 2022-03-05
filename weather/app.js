var main = document.querySelector('.location');
var temp = document.querySelector('.temperature-value p');
var desc = document.querySelector('.temperature-description p');
var iconElement = document.getElementById('weather.icon');
const timeEl = document.getElementById('time') ; 
const dateEl = document.getElementById('date') ;
const days = ['LUNDI' , 'Mardi' , 'MERCREDI' ,'JEUDI' , 'VENDREDI' , 'SAMEDI' , 'DIMANCHE'] ;
const months = ['JANVIER','FéVRIER','MARS','AVRIL','MAI','JUIN','JUILLET','AOUT','SEPTEMBRE','OCTOBRE','NOVEMBRE','DECEMBRE'];
setInterval (() => {
const time = new Date() ; 
const month = time.getMonth() ; 
const date = time.getDate() ; 
const day = time.getDate();
const hour = time.getHours();
const minute = time.getMinutes(); 
const hoursIn12HFormat = hour >=13 ? hour%12 : hour ; 
const ampm = hour > 12 ? 'PM': 'AM' ;

timeEl.innerHTML = hoursIn12HFormat+ ':'+minute + `<span id="am-pm"> ${ampm}</span>` 
dateEl.innerHTML = days[day]+', '+date +' ' +months[month] ; 
},1000);
let weather = {
 apiKey: "df58c13d93530105f2243d736b24fede",
 
  
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = `${tempValue} °<span>C</span>`;
  iconElement.innerHTML = `<img src="http://openweathermap.org/img/wn/${day.weather.iconId}@2x.png"`;
   
})

}}
