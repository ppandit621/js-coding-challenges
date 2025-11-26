// Q3. Count Words
// Given array: \["apple", "banana", "apple"\]
// Write countWords(arr) using reduce() to return:
// \{ apple: 2, banana: 1 \}

function countWords(arr) {
  return arr.reduce((counts, word) => {
    counts[word] = (counts[word] || 0) + 1;
    return counts;
  }, {});
}

console.log(countWords(["apple", "banana", "apple"]));