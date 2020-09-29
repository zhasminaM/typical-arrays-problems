
exports.min = function min (array) {
    let min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}

 


exports.max = function max (array) {
    let max = array[0]; 
    for (var i = 0; i < array.length; i++) { 
        if (max < array[i]) max = array[i]; 
    }

    return max;
}

exports.avg = function avg (array) {
    return avg.reduce((a, b) => (a + b)) / avg.length;
}
