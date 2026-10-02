/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  } else if (c > max) max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (
    a + b > c &&
    a - b < c &&
    b - c < a &&
    b + c > a &&
    a - c < b &&
    a + c > b
  ) {
    if (a === b || a === c || b === c) {
      return true;
    }
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romanNum = '';

  if (num >= 10) {
    for (let i = 1; i <= num / 10; i += 1) {
      romanNum += 'X';
    }
  }

  switch (num % 10) {
    case 1:
      romanNum += 'I';
      break;
    case 2:
      romanNum += 'II';
      break;
    case 3:
      romanNum += 'III';
      break;
    case 4:
      romanNum += 'IV';
      break;
    case 5:
      romanNum += 'V';
      break;
    case 6:
      romanNum += 'VI';
      break;
    case 7:
      romanNum += 'VII';
      break;
    case 8:
      romanNum += 'VIII';
      break;
    case 9:
      romanNum += 'IX';
      break;
    default:
      break;
  }

  return romanNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let wordsStr = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i > 0) {
      wordsStr += ' ';
    }
    switch (numberStr[i]) {
      case '1':
        wordsStr += 'one';
        break;
      case '2':
        wordsStr += 'two';
        break;
      case '3':
        wordsStr += 'three';
        break;
      case '4':
        wordsStr += 'four';
        break;
      case '5':
        wordsStr += 'five';
        break;
      case '6':
        wordsStr += 'six';
        break;
      case '7':
        wordsStr += 'seven';
        break;
      case '8':
        wordsStr += 'eight';
        break;
      case '9':
        wordsStr += 'nine';
        break;
      case '0':
        wordsStr += 'zero';
        break;
      case ',':
        wordsStr += 'point';
        break;
      case '.':
        wordsStr += 'point';
        break;
      case '-':
        wordsStr += 'minus';
        break;
      default:
        break;
    }
  }
  return wordsStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < Math.ceil(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let counter = 0;
  for (
    let i = 0;
    (num / 10 ** i) % 10 >= 1 || (num / 10 ** i) % 10 === 0;
    i += 1
  ) {
    counter += 1;
  }

  for (let i = 1; i < counter; i += 1) {
    if (
      Math.trunc((num / 10 ** i) % 10) === digit ||
      (num % 10 === 0 && digit === 0)
    ) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }

    let rightSum = 0;
    for (let j = i + 1; j < arr.length; j += 1) {
      rightSum += arr[j];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }

  let x = 0;
  let y = 0;

  let direction = 'right';

  for (let i = 1; i <= size * size; i += 1) {
    if (x === size) {
      direction = 'down';
      x -= 1;
      y += 1;
    } else if (y === size) {
      direction = 'left';
      x -= 1;
      y -= 1;
    } else if (x < 0) {
      direction = 'up';
      x += 1;
      y -= 1;
    } else if (y < 0) {
      direction = 'right';
      x += 1;
      y += 1;
    }

    if (
      matrix[y][x] !== undefined &&
      (x !== size || y !== size || !(x < 0) || !(y < 0))
    ) {
      switch (direction) {
        case 'right':
          direction = 'down';
          x -= 1;
          y += 1;
          break;
        case 'left':
          direction = 'up';
          x += 1;
          y -= 1;
          break;
        case 'down':
          direction = 'left';
          x -= 1;
          y -= 1;
          break;
        case 'up':
          direction = 'right';
          x += 1;
          y += 1;
          break;

        default:
          break;
      }
    }

    switch (direction) {
      case 'right':
        matrix[y][x] = i;
        x += 1;
        break;
      case 'left':
        matrix[y][x] = i;
        x -= 1;
        break;
      case 'down':
        matrix[y][x] = i;
        y += 1;
        break;
      case 'up':
        matrix[y][x] = i;
        y -= 1;
        break;
      default:
        break;
    }
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rotatedMatrix = new Array(matrix.length);
  for (let i = 0; i < rotatedMatrix.length; i += 1) {
    rotatedMatrix[i] = new Array(rotatedMatrix.length);
  }
  const cloneMatrix = matrix;
  for (let i = 0; i < rotatedMatrix.length; i += 1) {
    for (let j = 0; j < rotatedMatrix.length; j += 1) {
      rotatedMatrix[j][matrix.length - i - 1] = matrix[i][j];
    }
  }
  for (let i = 0; i < rotatedMatrix.length; i += 1) {
    for (let j = 0; j < rotatedMatrix.length; j += 1) {
      cloneMatrix[i][j] = rotatedMatrix[i][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function quickSort(array) {
    if (array.length <= 1) return array;

    const pivot = array[Math.floor(array.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    for (let i = 0; i < array.length; i += 1) {
      if (array[i] < pivot) {
        left[left.length] = array[i];
      } else if (array[i] > pivot) {
        right[right.length] = array[i];
      } else {
        equal[equal.length] = array[i];
      }
    }
    return [...quickSort(left), ...equal, ...quickSort(right)];
  }
  const sortedArray = quickSort(arr);
  const requiredArr = arr;
  for (let i = 0; i < arr.length; i += 1) {
    requiredArr[i] = sortedArray[i];
  }

  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  let iterator = iterations;
  function shuffleCharOneTime(st) {
    let even = '';
    let odd = '';
    for (let i = 0; i < st.length; i += 1) {
      if (i % 2 === 0) {
        even += st[i];
      } else {
        odd += st[i];
      }
    }
    return even + odd;
  }
  while (iterator > 0) {
    result = shuffleCharOneTime(result);
    iterator -= 1;
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
  const nums = [];

  let length = 0;
  for (let i = 0; number / 10 ** i >= 1; i += 1) {
    length += 1;
  }

  for (let i = length - 1; i > -1; i -= 1) {
    nums.push(Math.trunc((number / 10 ** i) % 10));
  }
  console.log(nums, number);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
