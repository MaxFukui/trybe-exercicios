let n = 4;

function treatMessage(message) {
  console.log(message, "\n------------------\n");
}

function printStars(num) {
  let text = "";
  for (let i = 0; i < num; i++) {
    text = text.concat("*");
  }
  return text;
}

function printSpaces(num) {
  let text = "";
  for (let i = 0; i < num; i++) {
    text = text.concat(" ");
  }
  return text;
}

function createIqualRows(rows) {
  let restingRows = rows;
  let text = "";
  treatMessage("Creating a square");
  for (let i = 0; i < rows; i++) {
    text = text.concat("*");
  }
  do {
    console.log(text);
    restingRows--;
  } while (restingRows > 0);
}

function createAHalfSquare(rows) {
  let restingRows = rows;
  treatMessage("Creating a half square");
  do {
    let text = "";
    for (let i = restingRows; i > 0; i--) {
      text = text.concat("*");
    }
    restingRows--;
    console.log(text);
  } while (restingRows > 0);
  console.log("\n");
}

function isPrime(num) {
  if (num == 1) return true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function createATriangle(rows) {
  let restingRows = rows;
  if (isPrime(rows) == false) {
    return "Não é primo";
  }

  let halfDigits = Math.floor(rows / 2) + 1;
  let positionStar = -1;
  for (let i = 1; i <= rows; i++) {
    if (i == 1) {
      console.log("*");
    }
    if (i == rows) {
      console.log(printStars(rows));
    }
    if (positionStar>0){
      let text = "";
    }
    // resting rows - 2, dividir os 3 espaços.
    // Os epaços do meio são crescentes
    // as laterais decrescentes (tentar tirar proveito disso?)

    // *
    // **
    // * *
    // *  *
    // *   *
    // ******
    positionStar ++;
  }
}

createIqualRows(n);
createAHalfSquare(n);
createATriangle(5);
console.log(printStars(2));
