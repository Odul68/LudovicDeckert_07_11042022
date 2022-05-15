import { Filters } from "./filters.js"

let filter = new Filters();

searchInput.addEventListener("keyup", function (e) {
    let nameItems = document.querySelectorAll(".recipeCards")

    if(e.target.value.length > 2) {
        filter.inputFilter(e.target.value)
    } else {
        nameItems.forEach((item) => {
        item.closest("article").style.display = "block";
        })
    }
})


// Ingredients Button searchBar 

const ingredientsSearchInput = document.querySelector(".sortBtnIngredients")

ingredientsSearchInput.addEventListener("keyup", (e) => {
    let ingredientsName = document.querySelectorAll(".ingredientsContent")

    if(e.target.value.length > 2) {
        let searchIngredientsName = e.target.value.toLowerCase();
        ingredientsName.forEach((item) => {
            if(item.textContent.toLowerCase().indexOf(searchIngredientsName) !== -1){
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


// FILTER BY TAGS 


// Ingredient tag and filter 
const tagsContainer = document.querySelector(".tags")
const ingredientOption = document.querySelectorAll(".ingredientsOption")
Array.from(ingredientOption).forEach((item) => 
item.addEventListener("click", () => {

    // +++++++++++++++++++

    const searchInput = document.querySelector("#searchInput");
    // inputFilter(searchInput.textContent);

    // ++++++++++++++++++


    const ingredientNewTag = document.createElement("div");
    ingredientNewTag.classList.add("ingredientTag")
    ingredientNewTag.innerText = item.innerText;
    tagsContainer.appendChild(ingredientNewTag);
    filter.inputFilter(item.innerText)

    ingredientNewTag.addEventListener("click", () => {
        ingredientNewTag.remove()
        filter.inputFilter(item.innerText = "")
    })
})
)


// Appliance tag and filter
const applianceOption = document.querySelectorAll(".appliancesOption")
Array.from(applianceOption).forEach((item) =>
item.addEventListener("click", () => {
    const applianceNewTag = document.createElement("div");
    applianceNewTag.classList.add("applianceTag")
    applianceNewTag.innerText = item.innerText;
    tagsContainer.appendChild(applianceNewTag);
    filter.inputFilter(item.innerText)

    applianceNewTag.addEventListener("click", () => {
        applianceNewTag.remove()
        filter.inputFilter(item.innerText = "")
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
        filter.inputFilter(item.innerText = "")
    })
})
)