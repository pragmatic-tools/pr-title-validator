import { isValidTitle } from '../src/validator';
import { expect, test } from '@jest/globals';

test.each([
  {inputStr: 'PCD-101', inputRegex: 'PCD-.*'},
  {inputStr: 'PCD-202 Fix bug reports', inputRegex: 'PCD-\\d+.*'},
])('can detect valid PR title', ({inputStr, inputRegex}) => {
  expect(isValidTitle(inputStr, inputRegex)).toBe(true)
})

test.each([
  {inputStr: 'ABC-101', inputRegex: 'PCD-.*'},
  {inputStr: 'PCD-ABC', inputRegex: 'PCD-\\d+'},
])('can detect invalid PR title', ({inputStr, inputRegex}) => {
  expect(isValidTitle(inputStr, inputRegex)).toBe(false)
})

