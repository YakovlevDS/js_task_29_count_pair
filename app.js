
// *? Task: У Боба на столе лежат камни расположенные в ряд. Каждый из них может быть красным, зеленым или синим и представлен символом R, G или B соответственно.

// Помоги Бобу найти минимальное количество камней, которые он должен убрать со стола, чтобы после этого каждая пара рядом лежащих камней состояла из камней разного цвета.

// Примеры:

// "RRGB" => 1
// "RRGGB" => 2
// "RRRRGB" => 3
// "RGBRGBRGGB" => 1
// "RGGRGBBRGRR" => 3
// "RRRRGGGGBBBB" => 9


// Solution 1


const colorStones = stones => {
  let countPair = 0;

  for (let i = 0; i < stones.length; i++) {
    if (stones[i] === stones[i + 1]) {
      countPair += 1;
    }
  }

  return countPair;
}


console.log(colorStones("RRGB"));
console.log(colorStones("RRGGB"));
console.log(colorStones("RRRRGB"));
console.log(colorStones("RGBRGBRGGB"));
console.log(colorStones("RGGRGBBRGRR"));
console.log(colorStones("RRRRGGGGBBBB"));

// ! Explanation:Используем стрелочную функцию и  for , if 