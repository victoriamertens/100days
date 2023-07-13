import { codeToIcon } from './weatherCodes';
import { test, expect } from 'vitest';

test('Converting 800 and 801 code distinction to proper icon file', () => {
  expect(codeToIcon(800)).toBe('/src/Icons/sunny.svg');
  expect(codeToIcon(801)).toBe('/src/Icons/partly.svg');
});
