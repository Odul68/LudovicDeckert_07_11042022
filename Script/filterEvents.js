import display from "./display.js"
import filter from "./filters.js"


// Search is entered and goes to the filterInputs function


searchInput.addEventListener("keyup", function (e) {
        filter.filterInputs(e.target.value);
        filter.displayRecipes();
    });


// Ingredients Button searchBar  - search ingredients in the button's list


const ingredientsSearchInput = document.querySelector(".sortBtnIngredients")

ingredientsSearchInput.addEventListener("keyup", (e) => {
    let ingredientsName = document.querySelectorAll(".ingredientsOption")

        let searchIngredientsName = e.target.value.toLowerCase();
        const ingredientResults = Array.from(ingredientsName)
        .filter(
            (item) => 
                item.innerText.toLowerCase().indexOf(searchIngredientsName) !== -1
        )
        .map((item) => item.innerText.trim());
        return display.displayIngredientsButton(ingredientResults); 
});


// Appliances Button searchBar  - search appliances in the button's list


const appliancesSearchInput = document.querySelector(".sortBtnAppliances")

appliancesSearchInput.addEventListener("keyup", (e) => {
    let appliancesName = document.querySelectorAll(".appliancesOption") 

        let searchAppliancesName = e.target.value.toLowerCase();
        const applianceResults = Array.from(appliancesName)
        .filter(
            (item) =>
                item.innerText.toLowerCase().indexOf(searchAppliancesName) !== -1
        )
        .map((item) => item.innerText.trim());
        return display.displayAppliancesButton(applianceResults);
});


// Ustensils Button searchBar - search ustensils in the button's list


const ustensilsSearchInput = document.querySelector(".sortBtnUstensils")

ustensilsSearchInput.addEventListener("keyup", (e) => {
    let ustensilsName = document.querySelectorAll(".ustensilsOption")

        let searchUstensilsName = e.target.value.toLowerCase();
        const ustensilResults = Array.from(ustensilsName)
        .filter(
            (item) => 
                item.innerText.toLowerCase().indexOf(searchUstensilsName) !== -1
        )
        .map((item) => item.innerText.trim());
        return display.displayUstensilsButton(ustensilResults);
});


