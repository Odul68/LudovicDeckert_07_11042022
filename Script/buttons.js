import data from "../recipes.js"

// Button functions for opening and closing
document.getElementById("ingredientsBtn").onclick = () => {
  document.querySelector(".ingredientsContent").classList.toggle("show");
  document.getElementById("arrowIngredients").classList.toggle("active");
  document.querySelector(".sortBtnIngredients").classList.toggle("active");
  document.querySelector("#ingredientsBtn").classList.toggle("active");
}

document.getElementById("appliancesBtn").onclick = () => {
  document.querySelector(".appliancesContent").classList.toggle("show");
  document.getElementById("arrowAppliances").classList.toggle("active");
  document.querySelector(".sortBtnAppliances").classList.toggle("active");
  document.querySelector("#appliancesBtn").classList.toggle("active");
}

document.getElementById("ustensilsBtn").onclick = () => {
  document.querySelector(".ustensilsContent").classList.toggle("show");
  document.getElementById("arrowUstensils").classList.toggle("active");
  document.querySelector(".sortBtnUstensils").classList.toggle("active");
  document.querySelector("#ustensilsBtn").classList.toggle("active");
}


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

console.log(ingredients)
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


const ustensils = [
    ...new Set(
        data.recipes.flatMap((recipe) => recipe.ustensils))];
console.log(ustensils);

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