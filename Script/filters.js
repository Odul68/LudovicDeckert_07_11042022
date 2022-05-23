import recipes from "../recipes.js";
import display from "./display.js";

// const searchInput = document.querySelector("#searchInput")

// let display = new Display();
// display.displayRecipes();


// Ingredients only already without duplicate and all with the same syntax keeping the capital letter at the beginning
const formatIngredientString = (i) => {
    let g = i.toLowerCase();
    return `${i[0].toUpperCase()}${g.slice(1)}`;  
};

export class Filters {
    recipeList = recipes;
    filteredRecipes = [];
    filteredRecipesIngredients = [];
    filteredRecipesAppliances = [];
    filteredRecipesUstensils = [];
    tags = [];


    inputFilter = (input) => {
        let searchItem = input.toLowerCase(); 
        console.log(searchItem)

        this.filteredRecipes = this.recipeList.filter(
            (item) => 
                item.name.toLowerCase().indexOf(searchItem) !== -1 ||
                item.description.toLowerCase().indexOf(searchItem) !== -1 ||
                item.ustensils.indexOf(searchItem) !== -1 ||
                item.ingredients.toLowerCase().indexOf(searchItem) !== -1  
                // item.appliance.toLowerCase().indexOf(searchItem) !== -1
            );

            display.displayRecipes(this.filteredRecipes);
            // this.getIngredients;
            // console.log(this.getIngredients())
            // this.getIngredients(this.filteredRecipes);
            // this.getAppliances();
            // this.getUstensils();
    };

    getIngredients = () => {
        this.filteredRecipesIngredients = [ 
            ...new Set(
        recipes.flatMap((recipe) =>
        recipe.ingredients.map((r) => formatIngredientString (r.ingredient))
        )
    )];
    }

    // getAppliances = () => {
    //    this.filteredRecipesAppliances = [
    // ...new Set(recipes.map((recipe) => recipe.appliance))];
    // }

    // getUstensils = () => {
    //     this.filteredRecipesUstensils = [
    //         ...new Set(
    //             recipes.flatMap((recipe) => recipe.ustensils)
    //         )
    //     ]
    // }


 }

 let filter = new Filters();
 export default filter;






