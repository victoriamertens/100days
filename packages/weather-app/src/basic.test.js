import { test, expect, vi } from 'vitest';
import { codeToIcon } from '../weatherCodes';
import allAPIs from '../APIs';
import axios from 'axios';
import fetchAPIs from '../APIs';

test('Converting code to proper icon file', () => {
  expect(codeToIcon(800)).toBe('/src/Icons/sunny.svg');
  expect(codeToIcon(801)).toBe('/src/Icons/partly.svg');
});

test('Function running in order for city to weather', async () => {
  const spy = vi.spyOn(allAPIs, 'cityToWeather');

  // const result = await allAPIs.cityToWeather('testing');
  // console.log('SPY:', await spy('test'));
  const result = await spy('testing');
  expect(spy).toHaveBeenCalledTimes(1);
  expect(result).toEqual(0);
});

//THIS IS ALL ATTEMPTS FOR FUTURE MOCKING, NOTES BELOW
// const spy2 = vi
// .spyOn(allAPIs, 'fetchWeather')
// .mockImplementation((string) => {
//   return string;
// });
// const spy3 = vi
// .spyOn(allAPIs, 'fetchCoordinates')
// .mockImplementation((el) => {
//   return el;
// });
// const spy4 = vi
// .spyOn(allAPIs, 'cityToWeather')
// .mockImplementation((input) => {
//   let mockResult = fetchAPIs.fetchCoordinates(input);
//   let trueResult = spy3(mockResult);
//   return trueResult;
// });
