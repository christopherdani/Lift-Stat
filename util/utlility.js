// Need to work on this so that it can check nested values...
exports.contains = (arr, key, val) => {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i][key] === val) return true;
    }
    return false;
}
