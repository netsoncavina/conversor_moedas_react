axios = require("axios");

axios
  .get("https://economia.awesomeapi.com.br/json/last/USD-BRL")
  .then(function (response) {
    console.log(response.data);
  });
