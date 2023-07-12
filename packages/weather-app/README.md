# Serverless Weather Application

This application was designed to showcase weather information for a user's geolocation and any addition city the user enters into the search bar. It is a simple application, but under the hood, the Weather App is completely serverless, using AWS Lambda and API Gateway to connect the application to each API endpoint.

## Application Description

On page load, the application utilizes HTML5's geolocation function to capture the user's latitude and longitude to send it, via Lambda, to OpeanWeather's 'One Call API 3.0'. The program displays this information when the weather data returns from the API. From initial page load, the user can enter in the name of a city into the search bar and run an API call, through Lambda, to API Ninja's City API to convert the city name into latitude and longitude, and then to OpenWeather's API to retrieve the weather data for that city.

I had the idea to make the Weather Application serverless because I was looking for a challenge and an opportunity to grow my understanding of application models and API calls. As I learned more about serverless computing and the rapid growth and utilization of cloud-based solutions, I ultimately decided it would be good practice for future employment. AWS Lambda stood out to me because it supports Node, which is my preferred backend language, its ability to integrate with a large list of other AWS services, and overall maturity and utilization in the market.

While I am glad I pursued this learning experience, in the future I will likely be looking more closely at Netlify's or Vercel's serverless functions, since they create less friction for developers and are built on top of AWS Lambda.
