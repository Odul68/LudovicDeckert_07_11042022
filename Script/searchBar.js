

const searchInput = document.querySelector("#searchInput")


export const inputFilter = (input) => {
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


searchInput.addEventListener("keyup", function (e) {
    let nameItems = document.querySelectorAll(".recipeCards")

    if(e.target.value.length > 2) {
        inputFilter(e.target.value)
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