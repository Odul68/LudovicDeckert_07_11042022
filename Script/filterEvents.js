import display from "./display.js"
import recipes from "../recipes.js";


// Search is entered and goes to the filterInputs function



const searchInput = document.querySelector("#searchInput") 
searchInput.addEventListener("keyup", function () {

    let searchItem = searchInput.value.toLowerCase(); 

    const filteredRecipes = []
      
      
      for (let i = 0; i < recipes.length; i++) {

        const {name, ingredients, description} = recipes[i];

        const recipeName = name.toLowerCase().includes(searchItem.toLowerCase());

        const recipeDescription = description.toLowerCase().includes(searchItem.toLowerCase());

        let recipeIngredients = false;
        for (let y = 0; y < ingredients.length; y++) {
          if (ingredients[y].ingredient.toLowerCase().includes(searchItem.toLowerCase())){
            recipeIngredients = true;
          }
        }

        if (recipeName || recipeDescription || recipeIngredients){
            filteredRecipes.push(recipes[i]); // Pushes the recipes that matches in "filteredRecipes"
            display.displayRecipes(filteredRecipes); // Gives the filteredRecipes to display in the display Class
        }
       }
    }
);










