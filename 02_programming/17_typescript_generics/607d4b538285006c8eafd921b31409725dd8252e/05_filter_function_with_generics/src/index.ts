function filterFor<T>(array: T[], predicate:(element: T) => boolean): T[] {
    const resultArray = [];

  for (const element of array) {
    if (predicate(element)) {
      resultArray.push(element)
    }
  }

  return resultArray;
}

export { filterFor }
