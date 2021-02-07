const meal = document.getElementById('meal-input')
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
.then(response => response.json())
.then(data => console.log(data))