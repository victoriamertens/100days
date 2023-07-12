//Below is the Lambda Function I named 'requestWeather'. It connects to the OpenWeather API to request weather data for the lat and long it is provided

import axios from 'axios';

export const handler = async(event, context) => {
// TODO
console.log("TEsting the weather", JSON.stringify(event))
let lat = event.queryStringParameters.lat;
let lon = event.queryStringParameters.lon;
let api_key = {yourAPIKey};
let url = 'https://api.openweathermap.org/data/3.0/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + api_key + "&exclude=hourly,minutely,alert";

    let response;
    await axios({method: 'GET', url: url, headers: { 'appid':api_key, 'Content-Type':'application/json' }}).then((res) => response = res.data).catch((err) => console.log("ERROR:", err));

      console.log("THE RESULT:", response);

    let formattedResponse = {
    "statusCode": 200,
    "body": JSON.stringify(response),
    "headers": {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Methods": "*"
        }

}

    return formattedResponse

}
