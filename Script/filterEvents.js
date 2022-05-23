import display from "./display.js"
import filter from "./filters.js"
import recipes from "../recipes.js"




searchInput.addEventListener("keyup", function (e) {
    // let nameItems = document.querySelectorAll(".recipeCards")
    if(e.target.value.length < 3) {
        display.init();
    } if (e.target.value.length > 2) {
        filter.inputFilter(e.target.value)
    }
})

// FILTER BY TAGS 


// Ingredient tag and filter 
const tagsContainer = document.querySelector(".tags")

// TO CHANGE THIS TO BE RECIPE LIST OR FILTERED ONE ??
const ingredientOption = document.querySelectorAll(".ingredientsOption")

Array.from(ingredientOption).forEach((item) => 

item.addEventListener("click", () => {

    const ingredientNewTag = document.createElement("div");
    ingredientNewTag.classList.add("ingredientTag")
    ingredientNewTag.innerText = item.innerText;
    tagsContainer.appendChild(ingredientNewTag);
    filter.inputFilter(item.innerText)

    ingredientNewTag.addEventListener("click", () => {
        ingredientNewTag.remove()
        display.displayRecipes(recipes)
    })
})
)


// Appliance tag and filter
const applianceOption = document.querySelectorAll(".appliancesOption")

Array.from(applianceOption).forEach((item) =>

item.addEventListener("click", () => {
    console.log(applianceOption)
    const applianceNewTag = document.createElement("div");
    applianceNewTag.classList.add("applianceTag")
    applianceNewTag.innerText = item.innerText;
    tagsContainer.appendChild(applianceNewTag);
    filter.inputFilter(item.innerText)

    applianceNewTag.addEventListener("click", () => {
        applianceNewTag.remove()
        display.displayRecipes(recipes)
    })
})
)


// Ustensil tag and filter
const ustensilOption = document.querySelectorAll(".ustensilsOption")

Array.from(ustensilOption).forEach((item) =>

item.addEventListener("click", () => {

    const ustensilNewTag = document.createElement("div");
    ustensilNewTag.classList.add("ustensilTag")
    ustensilNewTag.innerText = item.innerText;
    tagsContainer.appendChild(ustensilNewTag);
    filter.inputFilter(item.innerText)

    ustensilNewTag.addEventListener("click", () => {
        ustensilNewTag.remove()
        display.displayRecipes(recipes)
    })
})
)






// Ingredients Button searchBar 

const ingredientsSearchInput = document.querySelector(".sortBtnIngredients")

ingredientsSearchInput.addEventListener("keyup", (e) => {
    let ingredientsName = document.querySelectorAll(".ingredientsContent")

    if(e.target.value.length > 2) {
        let searchIngredientsName = e.target.value.toLowerCase();
        ingredientsName.forEach((item) => {
            if(
                item.textContent.toLowerCase().indexOf(searchIngredientsName) !== -1
            ) {
                item.closest("ul").style.display = "block";
            } else {
                item.closest("ul").style.display = "none";
            }
        });
    } else {
        ingredientsName.forEach((item) =>{
            item.closest("ul").style.display = "block";
        })
    }
})


// Appliances Button searchBar 

const appliancesSearchInput = document.querySelector(".sortBtnAppliances")

appliancesSearchInput.addEventListener("keyup", (e) => {
    let appliancesName = document.querySelectorAll(".appliancesContent")

    if(e.target.value.length > 2) {
        let searchAppliancesName = e.target.value.toLowerCase();
        appliancesName.forEach((item) => {
            if(item.textContent.toLowerCase().indexOf(searchAppliancesName) !== -1){
                item.closest("ul").style.display = "block";
            } else {
                item.closest("ul").style.display = "none";
            }
        });
    } else {
        appliancesName.forEach((item) =>{
            item.closest("ul").style.display = "block";
        })
    }
})


// Ustensils Button searchBar 

const ustensilsSearchInput = document.querySelector(".sortBtnUstensils")

ustensilsSearchInput.addEventListener("keyup", (e) => {
    let ustensilsName = document.querySelectorAll(".ustensilsContent")

    if(e.target.value.length > 2) {
        let searchUstensilsName = e.target.value.toLowerCase();
        ustensilsName.forEach((item) => {
            if(item.textContent.toLowerCase().indexOf(searchUstensilsName) !== -1){
                item.closest("ul").style.display = "block";
            } else {
                item.closest("ul").style.display = "none";
            }
        });
    } else {
        ustensilsName.forEach((item) =>{
            item.closest("ul").style.display = "block";
        })
    }
})