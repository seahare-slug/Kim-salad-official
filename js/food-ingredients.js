export function initFoodIngredientsJS() {
  fetch("/food-ingredients-data.json")
    .then((response) => {
      return response.json();
    })
    .then((jsonData) =>
      (function () {
        const otherFruits = document.querySelectorAll(".other-fruits-img");
        const otherVegitables = document.querySelectorAll(
          ".other-vegitables-img"
        );

        otherFruits.forEach((fruit) => {
          fruit.addEventListener("click", function () {
            handleFruitsIngredientsJsonData(fruit, jsonData);
            handleOtherFruits(fruit);
          });
        });
        otherVegitables.forEach((vegitable) => {
          vegitable.addEventListener("click", function () {
            handleVegitablesIngredientsJsonData(vegitable, jsonData);
            handleOtherVegitables(vegitable);
          });
        });
      })()
    );
}

function handleOtherFruits(fruit) {
  const mainFruitImg = document.querySelector(".main-fruits-img");
  const gridColor = document.querySelectorAll(".fruits-effect-content");
  const [src, alt, color] = [
    mainFruitImg.src,
    mainFruitImg.alt,
    mainFruitImg.dataset.color,
  ];
  mainFruitImg.src = fruit.src;
  mainFruitImg.alt = fruit.alt;
  mainFruitImg.dataset.color = fruit.dataset.color;
  gridColor.forEach((content) => {
    content.style.backgroundColor = fruit.dataset.color;
  });
  fruit.src = src;
  fruit.alt = alt;
  fruit.dataset.color = color;
  window.scroll({
    behavior: "smooth",
    top: 0,
  });
}

function handleFruitsIngredientsJsonData(fruit, jsonData) {
  const mainEffects = document.querySelectorAll(".main-fruit-effect");
  const mainIngredients = document.querySelectorAll(".main-fruit-ingredient");
  const fruitIngredientType = document.querySelectorAll(
    ".fruit-ingredient-type"
  );
  const fruitIngredientAmount = document.querySelectorAll(
    ".fruit-ingredient-amount"
  );
  for (let i = 0; i < 3; i++) {
    mainEffects[i].innerText = Object.keys(jsonData.fruits.effects[fruit.alt])[
      i
    ];
    mainIngredients[i].innerText = Object.values(
      jsonData.fruits.effects[fruit.alt]
    )[i];
  }
  for (let i = 0; i < 10; i++) {
    if (Object.keys(jsonData.fruits.ingredients[fruit.alt])[i] === undefined) {
      fruitIngredientType[i].innerText = "-";
      fruitIngredientAmount[i].innerText = "-";
    } else {
      fruitIngredientType[i].innerText = Object.keys(
        jsonData.fruits.ingredients[fruit.alt]
      )[i];
      fruitIngredientAmount[i].innerText = Object.values(
        jsonData.fruits.ingredients[fruit.alt]
      )[i];
    }
  }
}

function handleOtherVegitables(vegitable) {
  const mainVegitablesImg = document.querySelector(".main-vegitable-img");
  const gridColor = document.querySelectorAll(".vegitables-effect-content");
  const [src, alt, color] = [
    mainVegitablesImg.src,
    mainVegitablesImg.alt,
    mainVegitablesImg.dataset.color,
  ];
  mainVegitablesImg.src = vegitable.src;
  mainVegitablesImg.alt = vegitable.alt;
  mainVegitablesImg.dataset.color = vegitable.dataset.color;
  gridColor.forEach((content) => {
    content.style.backgroundColor = vegitable.dataset.color;
  });
  vegitable.src = src;
  vegitable.alt = alt;
  vegitable.dataset.color = color;
  window.scroll({
    behavior: "smooth",
    top: 1450,
  });
}

function handleVegitablesIngredientsJsonData(vegitable, jsonData) {
  const mainEffects = document.querySelectorAll(".main-vegitable-effect");
  const mainIngredients = document.querySelectorAll(
    ".main-vegitable-ingredient"
  );
  const vegitableIngredientType = document.querySelectorAll(
    ".vegitable-ingredient-type"
  );
  const vegitableIngredientAmount = document.querySelectorAll(
    ".vegitable-ingredient-amount"
  );
  for (let i = 0; i < 3; i++) {
    mainEffects[i].innerText = Object.keys(
      jsonData.vegitables.effects[vegitable.alt]
    )[i];
    mainIngredients[i].innerText = Object.values(
      jsonData.vegitables.effects[vegitable.alt]
    )[i];
  }
  for (let i = 0; i < 10; i++) {
    if (
      Object.keys(jsonData.vegitables.ingredients[vegitable.alt])[i] ===
      undefined
    ) {
      vegitableIngredientType[i].innerText = "-";
      vegitableIngredientAmount[i].innerText = "-";
    } else {
      vegitableIngredientType[i].innerText = Object.keys(
        jsonData.vegitables.ingredients[vegitable.alt]
      )[i];
      vegitableIngredientAmount[i].innerText = Object.values(
        jsonData.vegitables.ingredients[vegitable.alt]
      )[i];
    }
  }
}
