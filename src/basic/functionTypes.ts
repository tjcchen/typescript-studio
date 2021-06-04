// Function Types
// Utilize interface to describe function
interface SearchFunc {
  (source: string, substring: string): boolean;
}

let mySearch: SearchFunc;

// 1. regular
mySearch = function(source: string, substring: string) {
  let result = source.search(substring);
  return result > -1;
};

// 2. parameters do not need to match
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

// 3. without types specfied
mySearch = function(src, sub) {
  let result = src.search(sub);

  // return ''; // this casts error

  return result > -1;
};