# Always good weather app

To build the app use command `npx create-react-app ..` then we used `npm i axios` to access our APIs.

To run the app `npm i` and then `npm start`

## Weather API

Great free API with loads of information is on openweathermap.org

### URL for API

For our app we used this API call, as our user prefer to see weather at their preffered location
for top
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

for bottom
https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=2d3e410f0ed7818625d5352a26aeb264

### KEYS for API

57f2400d7accd7a350a5c4353c3705b6 but they should be saved in .env file
