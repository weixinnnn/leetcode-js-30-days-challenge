function* fibGenerator(): Generator<number, any, number> {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;

    const next = a + b;
    a = b;
    b = next;
  }
}
