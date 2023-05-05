/* 
Write a function createHelloWorld.
It should return a new function that always returns "Hello World".
*/

/**
 * @return {Function} A function that returns the string "Hello World" when invoked with any arguments.
 */
const createHelloWorld = () => () => "Hello World";
