# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sthan3990/Lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following Functions are currently implemented:
* assertArraysEqual - Function that asserts if two arrays are equals or not. 
* assertEqual -  Function that asserts if two values are equals or not.
* assertObjectsEqual - Function that asserts if two objects are equals.
* countLetters - Function that returns counts of each letter of a string.
* countOnly - Counts the number of characters in a string.
* eqArrays - Function that compares two arrays and prints whether they are equal or not.
* eqObjects - Function that compares two objects and prints whether they are equal or not.
* findKey - Function that compares two arrays.
* findKeyByValue - Function scans a object and returns the first key that contains the given value.
* head - Function that retrieves the first element from the array
* letterPositions - Function that returns a object with all the indices in the string where each letter is found.
* map - Function will return a new array based on the results of the callback Function.
* middle - Function that takes an array and returns the middle element of an array.
* tail - Function that retrieves every element except the head (first element, index 0) of the array.
* takeUntil - Function takes an array, starts from the beginning and returns a slice of the array.
* without - Function that removes elements from an array.