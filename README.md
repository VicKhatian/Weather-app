# Weather app

To build the app use command `npx create-react-app ..`

To run the app `npm i` and then `npm start`

## Weather API

Great free API with loads of information is on openweathermap.org

### URL for API

For our app we used this API call, as our user prefer to see weather at their preffered location

- for top container to allow user to choose preffered location:
  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

- for bottom container to allow display 8 days forcast as city call doesn't give us this info:
  https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=2d3e410f0ed7818625d5352a26aeb264

### KEYS for API

... they should be saved in .env file

### Lest for testing

To instal run `npm install --save-dev jest`
and change in sripts: "test": "jest"
