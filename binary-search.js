function binarySearch(array, searchTerm) {
  /*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
  let result;

  let start = 0;
  let end = array.length;

  let arrayTerms;

  while (array[arrayTerms] != searchTerm) {
    arrayTerms = Math.floor((start + end) / 2);

    if (array[arrayTerms] > searchTerm) {
      end = arrayTerms;
      
    } else if (array[arrayTerms] < searchTerm) {
      start = arrayTerms;
    
    } else if (array[arrayTerms] == searchTerm) {
      result = arrayTerms;
    }
  }

  // if (array[arrayTerms] == searchTerm){
  //   result = arrayTerms;
  // }

  return result;
}

module.exports = binarySearch;
