import { Display } from "./index.js";


// const searchInput = document.querySelector("#searchInput")

// let display = new Display();
// display.displayRecipes();

export class Filters {
filteredRecipes = [];


    inputFilter = (input) => {
        let nameItems = document.querySelectorAll(".recipeCards")
        let searchItem = input.toLowerCase();
        const filteredRecipes = [...nameItems].map((item) => {
            if(item.textContent.toLowerCase().indexOf(searchItem) !== -1){
                item.closest("article").style.display = "block";
            } else {
                item.closest("article").style.display = "none";
            }
        });
        return filteredRecipes;
    };

    onUpdateInput = (input) => {
        this.inputFilter = input;
        this.updateRecipesList();
    }

    onUpdateTags = () => {
        this.sortIngredients;
        this.sortAppliance;
        this.sortUstensils;
        this.updateRecipesList();
    }
    
    updateRecipesList = () => {
        this.filteredRecipes;
        // this.displayRecipes();
    }
 }

 let filter = new Filters();
 console.log(filter.onUpdateInput)





