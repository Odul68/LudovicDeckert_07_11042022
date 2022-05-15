import data from "../recipes.js"
const recipes = data.recipes;



// Ingredients only already without duplicate and all with the same syntax keeping the capital letter at the beginning
const formatIngredientString = (i) => {
    let g = i.toLowerCase();
    return `${i[0].toUpperCase()}${g.slice(1)}`;  
};
const ingredients = [
    ...new Set(
        data.recipes.flatMap((recipe) =>
        recipe.ingredients.map((r) => formatIngredientString (r.ingredient))
        )
    )
];



// Appliances only already without duplicate

const appliances = [
    ...new Set(data.recipes.map((recipe) => recipe.appliance))];
    console.log(appliances)


    
// ustensils button

// const formatUstensilString = (i) => {
//     let g = i.toString().toLowerCase();
//     console.log(i)
//     return `${i[0].toUpperCase()}${g.slice(0)}`;  
// };

// const ustensils = [
//     ...new Set(
//         data.recipes.flatMap((recipe) => 
//         recipe.ustensils.map((r) => formatUstensilString (r.ustensil))))];
// console.log(ustensils)

const ustensils = [
    ...new Set(
        data.recipes.flatMap((recipe) => recipe.ustensils)
    )
]


class Display {



    displayRecipes = (recipes) => {  // display card with Name, cooking time, ingredients and description
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


    sortIngredients = (ingredients) => {
        const ingredientsContainer = document.querySelector("#ingredientsContainer");
        ingredientsContainer.innerHTML = "";
        for(let ingredient of ingredients) {
            const element = document.createElement("div");
            element.innerHTML = `
          <ul id="ingredientsList" class="ingredientsContent" role="listbox"> 
              <li class="ingredientsOption " role="option">${ingredient}</li>
          </ul>
            `;
            ingredientsContainer.appendChild(element);
    
        }
    };


    sortAppliance = (appliances) => {
        const appliancesContainer = document.querySelector("#appliancesContainer");
        appliancesContainer.innerHTML = "";
        for(let appliance of appliances) {
            const element = document.createElement("div");
            element.innerHTML = `
          <ul id="appliancesList" class="appliancesContent" role="listbox"> 
              <li class="appliancesOption" role="option">${appliance}</li>
          </ul>
            `;
            appliancesContainer.appendChild(element);
    
        }
    };

    sortUstensils = (ustensils) => {
        const ustensilsContainer = document.querySelector("#ustensilsContainer");
        ustensilsContainer.innerHTML = "";
        for(let ustensil of ustensils) {
            const element = document.createElement("div");
            element.innerHTML = `
          <ul id="ustensilsList" class="ustensilsContent" role="listbox"> 
              <li class="ustensilsOption" role="option">${ustensil}</li>
          </ul>
            `;
            ustensilsContainer.appendChild(element);
    
        }
    };
}    
    



let display = new Display();
display.displayRecipes(recipes);
display.sortIngredients(ingredients);
display.sortAppliance(appliances);    
display.sortUstensils(ustensils);














 
