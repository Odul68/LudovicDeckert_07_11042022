import data from "../recipes.js"

const recipes = data.recipes;


// console.log(recipes.ingredients.join('')); 
// To remove the commas between ingredients ?

const ingredientsQty = data.recipes.map(recipe => recipe.ingredients);

// typeof undefined === undefined ?? 
// filter((elem) => elem !== undefined)

const displayRecipes = (recipes) => {  // display card with Name, cooking time, ingredients and description
    const recipeContainer = document.querySelector(".recipes");
    recipeContainer.innerHTML = "";
    for(let recipe of recipes) {
        const elementRecipe = document.createElement("article");
        elementRecipe.classList.add("recipeCards")
        elementRecipe.innerHTML = `
        <div class="recipeImage"></div>
        <div class="recipeInfos">
            <div class="recipeGeneralInfo">
                <h2 class="recipeName">${recipe.name}</h2>
                <p><i class="far fa-light fa-clock"></i>${recipe.time}</p>
            </div>
        <div class="recipeCookingInfo">
        <div class="recipeIngredients">
            <p>${recipe.ingredients.map(item => `<li><strong>${item.ingredient}</strong> : ${item.quantity} ${item.unit} </li>`)}</p>
        </div>
        <div class="recipeInstructions">
             <p>${recipe.description}</p>
        </div>
        </div>
        </div>
        `;
        
        recipeContainer.appendChild(elementRecipe);
    }
}

displayRecipes(recipes);


 
