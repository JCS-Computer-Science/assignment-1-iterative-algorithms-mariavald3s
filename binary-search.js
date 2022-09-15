function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	let result;

	let arrayTerms;
	arrayTerms = array.length;


	for (var i = 0; i < array.length; i++) {
	// while (arrayTerms > 1) {
		// arrayTerms = Math.floor(arrayTerms / 2);
		if (array[arrayTerms] > searchTerm) {
			array.filter(arrayObj => arrayObj > searchTerm)
			// array.splice(arrayTerms, arrayTerms);
		} else if (array[arrayTerms] < searchTerm) {
			array.filter(arrayObj => arrayObj > searchTerm)
			//delete zero to array terms
			// array.splice(0, arrayTerms);
		} else if (array[arrayTerms] == searchTerm) {
			result = arrayTerms;
		}
		console.log(searchTerm);
		console.log(arrayTerms);
		console.log(result);
		console.log(array);
	// }
	}


	return result;
}

module.exports = binarySearch;
