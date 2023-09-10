// // Get references to HTML elements
// const cityInput = document.getElementById('cityInput');
// const getWeatherButton = document.getElementById('getWeather');
// const weatherInfo = document.getElementById('weatherInfo');

// // OpenWeatherMap API key (replace with your own key)
// const apiKey = '06d0ca4e67f292cf4c60a875f3eaeca8';

// // Event listener for the "Get Weather" button
// getWeatherButton.addEventListener('click', () => {
//     const cityName = cityInput.value.trim();

//     if (cityName !== '') {
//         // Fetch weather data from the API
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
//             .then(response => response.json())
//             .then(data => {
//                 // Display weather information
//                 const weatherDescription = data.weather[0].description;
//                 const temperature = data.main.temp;
//                 const humidity = data.main.humidity;
//                 const windSpeed = data.wind.speed;

//                 const weatherHtml = `
//                     <h2>Weather in ${cityName}</h2>
//                     <p>Description: ${weatherDescription}</p>
//                     <p>Temperature: ${temperature} &#8451;</p>
//                     <p>Humidity: ${humidity}%</p>
//                     <p>Wind Speed: ${windSpeed} m/s</p>
//                 `;

//                 weatherInfo.innerHTML = weatherHtml;
//             })
//             .catch(error => {
//                 console.error('Error fetching weather data:', error);
//                 weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
//             });
//     }
// });

let city = document.querySelector("#cityInput");
let search = document.querySelector("#search");
let add = document.querySelector("#add");

const apikey = "06d0ca4e67f292cf4c60a875f3eaeca8"  ;
let flag=0;

search.addEventListener("click", () => {
  let inputCity = city.value.trim();

  

  
    
  if (inputCity !== "") {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apikey}&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Display weather information
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const Feel= data.main.feels_like

        let div = document.createElement("div");
        div.id = "update";
        div.style.color="black"
        div.style.width="95%"
        div.style.margin="20px"
        div.style.padding="35px"
        div.style.borderRadius="20px"
        // div.style.display="flex"
        // div.style.justifyContent="center"
        div.style.backgroundColor="rgb(58, 146, 199)"
        let h2 = document.createElement("h2");
        h2.id="h2"
        h2.style.margin="10px"

        h2.appendChild(document.createTextNode(`Weather in ${inputCity}`));
        let p1 = document.createElement("p")
        p1.className="p"
        p1.style.margin="5px"
           p1.style.fontWeight="600" 
        p1.textContent = `Weather Description: ${weatherDescription}`
        let p2 =document.createElement("p")
        p2.className="p"
        p2.style.margin="5px"
          p2.style.fontWeight="600"
        p2.textContent= `Temperature: ${temperature}`
        let p3 =document.createElement("p")
        p3.className="p"
        p3.style.margin="5px"
          p3.style.fontWeight="600"
        p3.textContent=`Humidity: ${humidity}`
        let p4 =document.createElement("p")
        p4.className="p"
        p4.style.margin="5px"
         p4.style.fontWeight="600"
        p4.textContent=`Wind Speed: ${windSpeed}`
        let p5=document.createElement("p")
        p5.className="p"
        p5.style.margin="5px"
        p5.style.fontWeight="600"
        p5.textContent=`Real feel: ${Feel} `

        div.appendChild(h2)
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        div.appendChild(p4)
        div.appendChild(p5)

        document.querySelector("#down").appendChild(div)


      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        let div = document.createElement("div");
        div.id = "update";
        div.style.color="black"
        let h2 = document.createElement("h2");
        h2.id="h2"
        h2.style.margin="40px"

        h2.appendChild(document.createTextNode(`Failed to fetch weather data. Please try again later.`));
        div.appendChild(h2)
        document.querySelector("#down").appendChild(div)


      });

      city.value=""
      
  }
    
  
  
});
