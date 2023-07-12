## requestWeather Function

**Below is the Lambda Function I named 'requestWeather'. It connects to the OpenWeather API to request weather data for the lat and long it is provided**

**NOTE: the below function is sent the lat and lon as parameters of the request named lat and lon.**

import axios from 'axios';

export const handler = async(event, context) => {
// TODO
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

## requestCoordinates function

**//Below is the Lambda function I named 'requestCoordinates'. This API connects to the API Ninja's City API to convert a city name to a lat and lon pair.**

**NOTE: The below function is sent the city (named searchTerm) as a path parameter in the url of the request.**

import https from "https";
import axios from 'axios';

export const handler = async(event, context) => {
let city = event.pathParameters.searchTerm;
let api_key = {Your APIKey}
let url = 'https://api.api-ninjas.com/v1/geocoding?city=' + city;

    let result = await axios({method: 'GET', url: url, headers: {
            'X-Api-Key': api_key}});



    let formattedResponse = {
    "statusCode": 200,
    "body": JSON.stringify(result.data),
     "headers": {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Methods": "*"
        },

}

console.log("RESPONSE:", formattedResponse)

    return formattedResponse;

};

**In order to import axios into the Lambda function you will have to set up an AWS Layer for axios within the AWS environment. This resource helps to explain AWS Layers and how to use them: [Working with Layers](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-layers.html);**
