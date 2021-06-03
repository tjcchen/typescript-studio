var mySearch;
// 1. regular
mySearch = function (source, substring) {
    var result = source.search(substring);
    return result > -1;
};
// 2. parameters do not need to match
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
// 3. without types specfied
mySearch = function (src, sub) {
    var result = src.search(sub);
    // return ''; // this casts error
    return result > -1;
};
