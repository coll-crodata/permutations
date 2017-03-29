permutations = function(anArray) {
    if (anArray.length < 2) {
        return [anArray];
    }
    if (anArray.length === 2) {
        return [
            [anArray[0], anArray[1]],
            [anArray[1], anArray[0]]
        ];
    }
    var returnArray = [];
    for (var idx = 0; idx < anArray.length; idx++) {
        var newArray = anArray.slice();
        var element = newArray[idx];
        newArray.splice(idx, 1);
        //   let tempArray = this.permutations(newArray);
        newArray = this.multArray(element, this.permutations(newArray));
        returnArray = returnArray.concat(newArray);
    }
    return returnArray;
};

multArray = function(element, anArray) {
    var newArray = [];
    anArray.forEach(function(elArray) {
        elArray.unshift(element);
        newArray.push(elArray);
    });
    return newArray;
};

module.exports = permutations;