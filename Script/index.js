import data from "../recipes.js"

const recipes = data.recipes;


const displayRecipes = (recipes) => {  // display card with Name, cooking time, ingredients and description
    const recipeContainer = document.querySelector(".recipes");
    recipeContainer.innerHTML = "";
    for(let recipe of recipes) {
        const ingredientsParagraph = document.createElement("p");
        recipe.ingredients.forEach(
            (item) =>
            (ingredientsParagraph.innerHTML += `<li><strong>${item.ingredient}</strong> :
             ${item.quantity || ""} 
             ${item.unit || ""} </li>`)
        );
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
        <div id="${recipe.name}" class="recipeIngredients">
        </div>
        <div class="recipeInstructions">
             <p>${recipe.description}</p>
        </div>
        </div>
        </div>
        `;
        
        recipeContainer.appendChild(elementRecipe);
        const recipeIngredient = document.getElementById(recipe.name);
        recipeIngredient.appendChild(ingredientsParagraph);
    }
}

displayRecipes(recipes);















 
