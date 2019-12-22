type JestDataset<T, U> = {
  input: T;
  output: U;
};

export function transformIntoParametrizedJest<T, U>(
  dataset: JestDataset<T, U>[]
): [T, U][] {
  return dataset.map((element) => [element.input, element.output]);
}

export default {
  transformIntoParametrizedJest
};
