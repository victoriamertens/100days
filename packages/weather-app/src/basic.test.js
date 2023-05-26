import { test, expect } from 'vitest';
import { codeToIcon } from '../weatherCodes';

test('Converting code to proper icon file', () => {
  expect(codeToIcon(800)).toBe('/src/Icons/sunny.svg');
});
