import data from "../recipes.js"

// Button functions for opening and closing

const ingredientsBtn = document.querySelector("#arrowIngredients");
ingredientsBtn.addEventListener("click", () => {
    const i = document.querySelectorAll(".ingredientsContent");
    Array.from(i).forEach((item) => item.classList.toggle("show"));
  document.getElementById("arrowIngredients").classList.toggle("active");
  document.querySelector(".sortBtnIngredients").classList.toggle("active");
  document.querySelector("#ingredientsBtn").classList.toggle("active");
})

const appliancesBtn = document.querySelector("#arrowAppliances");
appliancesBtn.addEventListener("click", () => {
    const a = document.querySelectorAll(".appliancesContent");
    Array.from(a).forEach((item) => item.classList.toggle("show"));
    document.getElementById("arrowAppliances").classList.toggle("active");
    document.querySelector(".sortBtnAppliances").classList.toggle("active");
    document.querySelector("#appliancesBtn").classList.toggle("active");
})

const ustensilsBtn = document.querySelector("#arrowUstensils");
ustensilsBtn.addEventListener("click", () => {
    const u = document.querySelectorAll(".ustensilsContent");
    Array.from(u).forEach((item) => item.classList.toggle("show"));
  document.getElementById("arrowUstensils").classList.toggle("active");
  document.querySelector(".sortBtnUstensils").classList.toggle("active");
  document.querySelector("#ustensilsBtn").classList.toggle("active");
})


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

// OK => to insert in the drop button
const sortIngredients = (ingredients) => {
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
sortIngredients(ingredients);




// Appliances only already without duplicate

const appliances = [
    ...new Set(data.recipes.map((recipe) => recipe.appliance))];
    console.log(appliances)
const sortAppliance = (appliances) => {
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
sortAppliance(appliances);


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

const sortUstensils = (ustensils) => {
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
sortUstensils(ustensils);


// FILTER BY TAGS 


const inputFilter = (input) => {
    let nameItems = document.querySelectorAll(".recipeCards")
    console.log(nameItems.length, input)
    let searchItem = input.toLowerCase();
    const filteredRecipes = [...nameItems].map((item) => {
      
        // if (item.textContent.toLowerCase().indexOf(searchItem) !== -1) {

        // Works when search is removed but button doesn't work alone
        if (item.textContent.toLowerCase().indexOf(searchItem) !== -1) {

            item.closest("article").style.display = "block";
        } else {
            item.closest("article").style.display = "none";
        }
    });
    return filteredRecipes;

}



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
    inputFilter(item.innerText)

}))


// Appliance tag and filter
const applianceOption = document.querySelectorAll(".appliancesOption")
Array.from(applianceOption).forEach((item) =>
item.addEventListener("click", () => {
    const applianceNewTag = document.createElement("div");
    applianceNewTag.classList.add("applianceTag")
    applianceNewTag.innerText = item.innerText;
    tagsContainer.appendChild(applianceNewTag);
    inputFilter(item.innerText)
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
    inputFilter(item.innerText)
})
)



