# Serverless Weather Application

This application was designed to showcase weather information for a user's geolocation and any addition city the user enters into the search bar. It is a simple application, but under the hood, the Weather App is completely serverless, using AWS Lambda and API Gateway to connect the application to each API endpoint.

## Application Description

On page load, the application utilizes HTML5's geolocation function to capture the user's latitude and longitude to send it, via Lambda, to OpeanWeather's 'One Call API 3.0'. The program displays this information when the weather data returns from the API. From initial page load, the user can enter in the name of a city into the search bar and run an API call, through Lambda, to API Ninja's City API to convert the city name into latitude and longitude, and then to OpenWeather's API to retrieve the weather data for that city.

I had the idea to make the Weather Application serverless because I was looking for a challenge and an opportunity to grow my understanding of application models and API calls. As I learned more about serverless computing and the rapid growth and utilization of cloud-based solutions, I ultimately decided it would be good practice for future employment. AWS Lambda stood out to me because it supports Node, which is my preferred backend language, its ability to integrate with a large list of other AWS services, and overall maturity and utilization in the market.

While I am glad I pursued this learning experience, in the future I will likely be looking more closely at Netlify's or Vercel's serverless functions, since they create less friction for developers and are built on top of AWS Lambda.

## How to Set Up the Project - Installation

Because the application utilizes AWS Lambda and API Gateway in addition to the APIs it connects to, in order to run this project locally you will need to complete a few external processes.

1. **Register for OpenWeather API Key** - To convert geolocation info into weather data, you will need to have an API Key for [OpenWeather's One Call API 3.0](https://openweathermap.org/api). Unfortunately, you have to add your credit card to the account in order to use the service, but they only charge starting after 1,000 API calls per day (which, even with my large amount of troubleshooting, I didn't hit).
2. **Register for API Ninja's API Key** - To convert a city to a latitude and longitude, I used [API Ninja's City API](https://api-ninjas.com/api/city).
3. **Create an Amazon Web Services Account** - There is a [Free Tier](https://aws.amazon.com/free/?e=gs21&src=introduction_freetier&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all) in AWS that allows you access to AWS Lambda and API Gateway (along with a bunch of their other services, like S3 for image upload). The link above should walk you through how to set up the account.

Once those are all set up, there is a good chunk of work to be done to set up Lambda and API Gateway properly. Fortunately, the AWS community has some great tutorials and well written documentation to help you along. Below are a few I used that helped me wrap my head around the task:

- [Serverlless Web Applications](https://aws.amazon.com/lambda/web-apps/)
- [Serverless "Hello World"](https://aws.amazon.com/getting-started/hands-on/run-serverless-code/)
- [Build a Serverless Web Application](https://aws.amazon.com/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/)

In the project, I have included a file called 'Lambda.js' that has a skeleton of the two Lambda Functions (serverless functions) that run when I hit the API Gateway attached to it, as well as some notes on configurations I had to use to get it all up and running.

Finally, to run this program from the root project (100 Days), you can run the command line: `yarn run weather` to host it locally on localhost:5173.

## Credits

A big thank you goes to the AWS community and all the well written resources they have created and published for developers. Walking through the tutorials and looking at the visualizations of the architecture were IMMENSELY helpful, along with the youtube contributors that provided context into the abstracted configurations.
