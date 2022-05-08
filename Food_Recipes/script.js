const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

const SEARCH_API = 'https://www.themealdb.com/api/json/v1/1/filter.php?i="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const movie = document.getElementById("recipe");
const btn = document.getElementById("recipeBtn");

getMealList();

function getMealList() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      data.meals.forEach((recipe) => {
        const { strMeal, strMealThumb, strInstructions } = recipe;

        const recipeEl = document.createElement("div");
        recipeEl.classList.add("recipe");
        recipeEl.innerHTML = `
          
          <img class="recipe-img"
            src="${strMealThumb}"
            alt="${strMeal}"
          />
          <div class="food-info">
            <h3>${strMeal}</h3>
            <a href="#" class="recipeBtn">Get Recipe</a>
          </div>
              `;
        main.appendChild(recipeEl);
      });
    });
}

btn.addEventListener("click", getMealRecipe);
recipeCloseBtn.addEventListener("click", () => {
  mealDetailsContent.parentElement.classList.remove("showRecipe");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMealList(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
