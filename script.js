function mealSearch() {
    const meal = document.getElementById('meal-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(response => response.json())
        .then(data => dispalyFoodItems(data));
}

const dispalyFoodItems = foods => {
    const mealsInfo = document.getElementById('mealInformation');
    const mealsdiv = document.getElementById('mealsDiv');
    mealsdiv.innerHTML = "";
    if (foods.meals == null) {
        mealsdiv.innerHTML = `
            <div>
                <p>Could not find </p>
            </div>
        `;
    }

    else {
        foods.meals.forEach(meal => {
            const mealDiv = document.createElement('div');

            const mealInfo =
                `
                <div id= "item-card" class="col">
                    <div class="card h-100 bg-white rounded border-0" style="width: 18rem;">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text text-center">${meal.strMeal}</p>
                        </div>
                    </div>
                </div>
                `;
            mealDiv.innerHTML = mealInfo;
            mealsInfo.appendChild(mealDiv);
        });
    }


}