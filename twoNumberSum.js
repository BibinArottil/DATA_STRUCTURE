let result = [];

function twoNumberSum(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        return result.push(array[i], array[j]);
      }
    }
  }
}

twoNumberSum([6, 5, 4, 3, 8, 0, 1], 10);

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
