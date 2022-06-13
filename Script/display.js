import recipes from "../recipes.js"
import filter from "./filters.js";



// Format the options to avoid duplicates and have the first letter of each option be a capital letter
const formatIngredientString = (i) => {
    let g = i.toLowerCase();
    return `${i[0].toUpperCase()}${g.slice(1)}`;  
};


// Creates a new array of all INGREDIENTS
const ingredients = [ ...new Set(
    recipes.flatMap((recipe) =>
    recipe.ingredients.map((r) => formatIngredientString (r.ingredient))
    )
)
];


// Creates a new array of all APPLIANCES 
const appliances = [
    ...new Set(recipes.map((recipe) => formatIngredientString (recipe.appliance)))];
  

// Creates a new array of all USTENSILS    
const ustensils = [
    ...new Set(
        recipes.flatMap((recipe) => recipe.ustensils))
    
]


// Container for tags once clicked on option
const tagsContainer = document.querySelector(".tags")


export class Display {


    displayRecipes = (recipes) => {  // Display card with Name, cooking time, ingredients and description
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



    displayIngredientsButton = (ingredients) => { // Display INGREDIENTS in in the Dropdown button when opened

        const ingredientsContainer = document.querySelector("#ingredientsContainer");

            ingredientsContainer.innerHTML = `
          <ul id="ingredientsList" class="ingredientsContent" role="listbox"> 
            ${ingredients.map(
                (ingredient) => 
                `<li class="ingredientsOption" role="option">${ingredient}</li>`
            ).join("")}
          </ul>
            `;
 
            
        const ingredientOption = document.querySelectorAll(".ingredientsOption")
        Array.from(ingredientOption).forEach((item) => { // When cliked on the option, it creates a tag in the "tagsContainer"
        item.addEventListener("click", () => {

               const ingredientNewTag = document.createElement("div");
               ingredientNewTag.classList.add("ingredientTag")
               ingredientNewTag.innerText = item.innerText;
               tagsContainer.appendChild(ingredientNewTag);
       
               filter.addTag(item.innerText) // Goes through the class Filters to filter recipes and display the corresponding ones
           
               ingredientNewTag.addEventListener("click", () => { // Display recipes when one tag is removed
                   ingredientNewTag.remove();
                   filter.removeTag(ingredientNewTag.innerText);
                   filter.displayRecipes(recipes)
               })
           })
      });      
};



    displayAppliancesButton = (appliances) => { // Display APPLIANCES in in the Dropdown button when opened

        const appliancesContainer = document.querySelector("#appliancesContainer");

        appliancesContainer.innerHTML = `
          <ul id="appliancesList" class="appliancesContent" role="listbox"> 
            ${appliances.map(
                (appliance) =>
                `<li class="appliancesOption" role="option">${appliance}</li>`
            ).join("")}  
          </ul>
            `;


        const applianceOption = document.querySelectorAll(".appliancesOption")
        Array.from(applianceOption).forEach((item) => { // When cliked on the option, it creates a tag in the "tagsContainer"
        item.addEventListener("click", () => {

            const applianceNewTag = document.createElement("div");
            applianceNewTag.classList.add("applianceTag")
            applianceNewTag.innerText = item.innerText;
            tagsContainer.appendChild(applianceNewTag);
    
            filter.addTag(item.innerText) // Goes through the class Filters to filter recipes and display the corresponding ones
    
            applianceNewTag.addEventListener("click", () => { // Display recipes when one tag is removed
                applianceNewTag.remove()
                filter.removeTag(applianceNewTag.innerText);
                filter.displayRecipes(recipes)
            })
        })
    });
};


        
    displayUstensilsButton = (ustensils) => { // Display USTENSILS in in the Dropdown button when opened

        const ustensilsContainer = document.querySelector("#ustensilsContainer");

        ustensilsContainer.innerHTML = `
          <ul id="ustensilsList" class="ustensilsContent" role="listbox"> 
            ${ustensils.map(
                (ustensil) => 
                `<li class="ustensilsOption" role="option">${ustensil}</li>`
            ).join("")}
          </ul>
            `;


        const ustensilOption = document.querySelectorAll(".ustensilsOption")
        Array.from(ustensilOption).forEach((item) => { // When cliked on the option, it creates a tag in the "tagsContainer"
        item.addEventListener("click", () => {

            const ustensilNewTag = document.createElement("div");
            ustensilNewTag.classList.add("ustensilTag")
            ustensilNewTag.innerText = item.innerText;
            tagsContainer.appendChild(ustensilNewTag);

            filter.addTag(item.innerText) // Goes through the class Filters to filter recipes and display the corresponding ones
    
            ustensilNewTag.addEventListener("click", () => { // Display recipes when one tag is removed
                ustensilNewTag.remove()
                filter.removeTag(ustensilNewTag.innerText);
                filter.displayRecipes(recipes)
            })
        })
    });
};   

};


let display = new Display();
export default display;
display.displayRecipes(recipes);
display.displayIngredientsButton(ingredients);
display.displayAppliancesButton(appliances)
display.displayUstensilsButton(ustensils)
