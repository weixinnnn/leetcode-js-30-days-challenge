/*
Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.
*/

const sleep = (millis: number) =>
  new Promise((resolve) => setTimeout(resolve, millis));
