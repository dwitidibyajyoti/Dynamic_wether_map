const day = document.querySelector('.day');
const date = document.querySelector('.today');
const submitBut = document.getElementById('submitBut');
const cityName = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const data_hidden = document.querySelector('.middle_layer');
console.log(data_hidden);

let d = new Date();
let weeck = d.getDay();
let todate = d.getDate();
let today;
let month;
switch (weeck) {
  case 0:
    today = 'Sunday';
    break;
  case 1:
    today = 'Monday';
    break;
  case 2:
    today = 'Tuesday';
    break;
  case 3:
    today = 'Wednesday';
    break;
  case 4:
    today = 'Thursday';
    break;
  case 5:
    today = 'Friday';
    break;
  case 6:
    today = 'Saturday';
}

switch (d.getMonth()) {
  case 0:
    month = 'JAN';
    break;
  case 1:
    month = 'FEB';
    break;
  case 2:
    month = 'MAR';
    break;
  case 3:
    month = 'APR';
    break;
  case 4:
    month = 'MAY';
    break;
  case 5:
    month = 'JUN';
    break;
  case 6:
    month = 'JULY';
    break;
  case 7:
    month = 'AUG';
    break;
  case 8:
    month = 'SEP';
    break;
  case 9:
    month = 'OCT';
    break;
  case 10:
    month = 'NOV';
    break;
  case 11:
    month = 'DEC';
}

day.innerHTML = today;
date.innerHTML = `${todate} ${month}`;

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === '') {
    city_name.innerHTML = 'plz write a city name before search';
  } else {
    data_hidden.classList.remove('deta_hide');
    try {
      var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${ENTERAPIKEY}`;
      const response = await fetch(url);
      const data = await response.json();
      const arryData = [data];
      // console.log(arryData);
      temp.innerHTML = arryData[0].main.temp;
      // temp_status.innerHTML = arryData[0].weather[0].main;
      temp_status.src = `http://openweathermap.org/img/wn/${arryData[0].weather[0].icon}@2x.png`;
      //console.log(arryData[0].weather[0].icon);
      city_name.innerHTML = `${arryData[0].name},${arryData[0].sys.country}`;
      // const tempMood = arryData[0].weather[0].main;
      // if (tempMood === 'clear') {
      //   temp_status.innerHTML = <i class="fas fa-sun-cloud"></i>;
      // } else if (tempMood === 'clouds') {
      //   temp_status.innerHTML = <i class="fad fa-clouds-sun"></i>;
      // } else if (tempMood === 'rain') {
      //   temp_status.innerHTML = <i class="fas fa-umbrella"></i>;
      // } else {
      //   temp_status.innerHTML = <i class="far fa-smoke"></i>;
      // }
    } catch {
      city_name.innerHTML = 'plz enter a valid city name';
    }
  }
};
submitBut.addEventListener('click', getInfo);
