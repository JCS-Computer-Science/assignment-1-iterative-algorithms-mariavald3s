function linearSearch(array, searchTerm) {
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */

	let foundIndex;
	
	for (var i = 0; i < array.length; i++) {
        if (array[i] === searchTerm) {
           foundIndex = i;
        }
    }
	return foundIndex;

}

module.exports = linearSearch;
