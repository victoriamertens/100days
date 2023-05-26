import { test, expect, vi, beforeEach } from 'vitest';
import { codeToIcon } from '../weatherCodes';
import allAPIs from '../APIs';
import utils from '../utils';
import axios from 'axios';

test('Converting code to proper icon file', () => {
  expect(codeToIcon(800)).toBe('/src/Icons/sunny.svg');
  expect(codeToIcon(801)).toBe('/src/Icons/partly.svg');
});

// beforeEach(() => {
//   vi.resetAllMocks();
// });

test('Function to test cityToWeather complete run', async () => {
  const spy = vi.spyOn(allAPIs, 'cityToWeather');
  const result = await allAPIs.cityToWeather('testing');

  expect(spy).toHaveBeenCalledWith('testing');
  expect(spy).toHaveBeenCalledTimes(1);
  expect(result).toEqual(0);
});

test('Function to test fetchCoordinates run', async () => {
  const spyCoordinates = vi.spyOn(utils, 'fetchCoordinates');
  const result = await allAPIs.cityToWeather('testing');

  console.log('Testing order');
  expect(spyCoordinates).toHaveBeenCalledTimes(1);
  expect(result).toBe(0);
});
