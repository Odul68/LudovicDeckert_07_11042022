import data from "./recipes.js"

const recipes = data.recipes;
// const ingredients = data.recipes.forEach(recipes => recipes.ingredients);
const ingredients = data.recipes[0].ingredients
console.log(ingredients)

// const sortIngredients = (recipes) => {
//     const sortRecipesContainer = document.querySelector(".sortRecipes");
//     sortRecipesContainer.innerHTML = "";
//     for(let recipe of recipes) {
//         const element = document.createElement("div");
//         element.innerHTML = `
//       <ul id="myDropdown" class="dropdown-content" role="listbox"> 
//           <li id="popularity" class="option optionSelected" role="option">${recipe.name}</li>
//       </ul>
//   </div>.
//         `;
//         sortRecipesContainer.appendChild(element);

//     }
// };
// sortIngredients(recipes);


// const sortAppliance = (recipes) => {
//     const sortRecipesContainer = document.querySelector("#appliancesBtn");
//     sortRecipesContainer.innerHTML = "";
//     for(let recipe of recipes) {
//         const sortApplianceButton = document.createElement("div");
//         sortApplianceButton.innerHTML = `
//       <ul id="myDropdown" class="dropdown-content" role="listbox"> 
//           <li id="popularity" class="option optionSelected" role="option">${recipe.appliance}</li>
//       </ul>
//   </div>.
//         `;
//         sortRecipesContainer.appendChild(sortApplianceButton);

//     }
// };
// sortAppliance(recipes);




const displayRecipes = (recipes) => {
    const recipeContainer = document.querySelector(".recipes");
    recipeContainer.innerHTML = "";
    for(let recipe of recipes) {
        const elementRecipe = document.createElement("article");
        elementRecipe.classList.add("recipeCards")
        elementRecipe.innerHTML = `
        <div class="recipeImage"></div>
        <div class="recipeInfos">
        <div class="recipeGeneralInfo">
        <h2>${recipe.name}</h2>
        <p><i class="far fa-light fa-clock"></i>${recipe.time}</p>
        </div>
        <div class="recipeCookingInfo">
            <div class="recipeIndredients">
                <p>${recipe.ustensils}</p>
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

displayRecipes(recipes, ingredients);