export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const reversedCol2 = reverseArray(collection_2);

  const mergedCol1Col2 = mergeTwoSorted(collection_1, reversedCol2);
  return mergeTwoSorted(mergedCol1Col2, collection_3);
}

function reverseArray(arr: number[]): number[] {
  const result: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

function mergeTwoSorted(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i++]);
    } else {
      result.push(b[j++]);
    }
  }

  while (i < a.length) result.push(a[i++]);
  while (j < b.length) result.push(b[j++]);

  return result;
}