const allMeals = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then(res => res.json())
    .then(data => mealDetails(data.meals))
}

const mealDetails = meals => {
  // console.log(meals);
  const cardGroup = document.getElementById('card-group');
  cardGroup.innerHTML = '';
  meals.forEach(meal => {
    console.log(meal)
    const mealDiv = document.createElement('div');
    mealDiv.innerHTML = `
        <div onclick="displayMealCode(${meal.idMeal})"  class="col">
            <div class="card h-100">
              <img src="${meal.strMealThumb}
              " class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Name : ${meal.strMeal}</h5>
                <p class="card-text">
                  ${meal.strInstructions.slice(0, 200)
      }
                </p>
              </div>
            </div>
          </div>
        
        `
    cardGroup.appendChild(mealDiv)
  })
}
const searchFoods = () => {
  const food = document.getElementById('searchFood')
  const getFood = food.value;
  // console.log('search food:', getFood)
  allMeals(getFood);
  food.value = '';

}
const displayMealCode = (idMeal) => {
  // console.log('meal')
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  // console.log(url)
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))

}

const displayMealDetails = meal => {
  // console.log('my meal code :', mealCode)
  const mealConteiner = document.getElementById('meal-conteiner');
  mealConteiner.innerHTML = ``;
  // console.log(mealConteiner)
  const mealDiv = document.createElement('div');
  // mealDiv.classList
  mealDiv.innerHTML = `
  <div class="card mb-3">
  <img src="${meal.strMealThumb}" class="card-img-top w-50 w-50" alt="...">
  <div class="card-body">
    <h5 class="card-title">Name : ${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions}</p>
    
</div>
 
`;
  mealConteiner.appendChild(mealDiv)

}

allMeals();