import { test, expect, vi, beforeEach } from 'vitest';
import allAPIs from './APIs';
import axios from 'axios';

vi.mock('axios');

beforeEach(() => {
  vi.resetAllMocks();
});

test('Testing fetchCoordinates API Call', async () => {
  const coords = [50.0, 50.0];
  axios.mockResolvedValue({
    data: [{ latitude: coords[0], longitude: coords[1] }],
  });
  let result = await allAPIs.fetchCoordinates('MockCity');
  expect(result).toEqual(coords);
});

test('Testing fetchWeather API Call', async () => {
  let coords = [50.0, 50.0];
  let weatherData = 'Weather Data';
  axios.mockResolvedValue({ data: weatherData });

  let result = await allAPIs.fetchWeather(coords);
  expect(result).toEqual(weatherData);
});
