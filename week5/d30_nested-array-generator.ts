type MultidimensionalArray = (MultidimensionalArray | number)[];

function* inorderTraversal(
  arr: MultidimensionalArray
): Generator<number, void, unknown> {
  for (const element of arr) {
    if (Array.isArray(element)) {
      yield* inorderTraversal(element); // Recursively traverse sub-arrays
    } else {
      yield element; // Yield integers encountered
    }
  }
}

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
