function merge(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;
  const result = [];
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] > arr2[index2]) {
      result.push(arr2[index2]);
      index2++;
    } else {
      result.push(arr1[index1]);
      index1++;
    }
  }
  while (index1 < arr1.length) {
    result.push(arr1[index1]);
    index1++;
  }
  while (index2 < arr2.length) {
    result.push(arr2[index2]);
    index2++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = { merge, mergeSort };
