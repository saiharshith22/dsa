// Find second largest element in an array
const findSecondLargest = (arr) => {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    // Edge case: array must have at least 2 elements
    if (arr.length < 2) return null;

    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
    console.log({ firstLargest, secondLargest });
  }
  return secondLargest;
};

const arr = [4, 8, 9, 0, 2, 7, 9, 1];
// console.log(findSecondLargest(arr));

const printSquareStar = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += j;
    }
    console.log(row);
  }
};
// printSquareStar(4);

const printTriangleNumberStar = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
};
// printTriangleNumberStar(5);

const printTriangleReverseNumberStar = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n + 1 - i; j++) {
      row += j;
    }
    console.log(row);
  }
};
// printTriangleReverseNumberStar(5);

//     5
//    54
//   543
//  5432
// 54321
const printTriangleReverseStar = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    row += " ".repeat(n - i);
    for (let j = n; j > n - i; j--) {
      row += j;
    }
    console.log(row);
  }
};
// printTriangleReverseStar(5);

//     *
//    **
//   ***
//  ****
// *****
const TriangleReverseStar = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let j;
    for (j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += "*";
    }
    console.log(row);
  }
};
// TriangleReverseStar(5);

function printTriangle1_0(n) {
  for (i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (j % 2 === 0) {
        row += 0;
      } else {
        row += 1;
      }
    }
    console.log(row);
  }
}

// printTriangle1_0(5);

const coundDigits = (n) => {
  if (n == 0) return 1;
  n = Math.abs(n); // edge case if num is negative
  let count = 0;
  while (n > 0) {
    count++;
    // console.log(Math.floor(n / 10));
    n = Math.floor(n / 10);
  }
  return count;
};

// console.log(coundDigits(-999));

// palindrome

function palndromeStr(str) {
  // console.log(str.split("").reverse().join(""));
  str = String(str);
  let str2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  }
  return str === str2;
}
// console.log(palndromeStr(121));

// better approach
function isPalindrome(str) {
  str = String(str);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
// console.log(isPalindrome("madam"));

function isPalindrome2(num) {
  let n = num;
  let rev = 0;
  if (num < 0) return false;
  while (num > 0) {
    reminder = num % 10;
    rev = 10 * rev + reminder;
    num = Math.floor(num / 10);
  }
  return n === rev;
}
// console.log(isPalindrome2(121));

function reverseNumber(num) {
  let sign = Math.sign(num); // 1 or -1
  num = Math.abs(num);

  let reversed = 0;
  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reversed * sign;
}

// console.log(reverseNumber(-123));
// console.log(reverseNumber(456));
