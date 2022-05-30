import recipes from "../recipes.js";
import display from "./display.js";

// const searchInput = document.querySelector("#searchInput")

// let display = new Display();
// display.displayRecipes();

// Ingredients only already without duplicate and all with the same syntax keeping the capital letter at the beginning
// const formatIngredientString = (i) => {
//   let g = i.toLowerCase();
//   return `${i[0].toUpperCase()}${g.slice(1)}`;
// };

export class Filters {
  recipeList = recipes;
  filteredRecipes = [];
  filteredRecipesIngredients = [];
  filteredRecipesAppliances = [];
  filteredRecipesUstensils = [];
  tags = [];
  selectedTags = [];
  searchItem = "";

  inputFilter = (input) => {
    let searchItem = input.toLowerCase();
    this.searchItem = searchItem + this.tags;
    console.log(searchItem)
    console.log(this.filteredRecipes)

    this.filteredRecipes = this.recipeList.filter(

      (item) =>
        item.name.toLowerCase().indexOf(searchItem) !== -1 ||
        item.description.toLowerCase().indexOf(searchItem) !== -1 ||
        item.ustensils.indexOf(searchItem) !== -1 ||
        item.appliance.toLowerCase().indexOf(searchItem) !== -1 ||
        item.ingredients
          .map((ingre) => ingre.ingredient.toLowerCase())
          .indexOf(searchItem) !== -1
    );
    return this.filteredRecipes;
  };

  filterInputs = () => {
    let filteredRecipesinit = this.inputFilter(this.searchItem);
    console.log(filteredRecipesinit.length);


    if (this.tags.length) {
        console.log(this.tags.length)

      const finalList = filteredRecipesinit.filter((item) => {
      const recipeIngrdients = item.ingredients.map((ingre) => ingre.ingredient.toLowerCase());
      const recipeUstensils = item.ustensils.map((us) => us.toLowerCase());
      const recipeAppliance = item.appliance.toLowerCase();
      const res = this.tags.filter((tag) =>
        [recipeAppliance, ...recipeIngrdients, ...recipeUstensils].includes(tag));

        return res.length === this.tags.length;
      });

      this.filteredRecipes = finalList;
      console.log(finalList)

    } else {
        this.filteredRecipes = filteredRecipesinit;
        console.log(filteredRecipesinit)
    }
  };

  addTag = (tag) => {
    console.log(tag);
    if (this.tags.includes(tag)) {
      return;
    }
    this.tags = [...this.tags, tag.toLowerCase()];
    console.log(this.tags)
    this.filterInputs();
    this.displayRecipes();
  };

        // WHEN CLICKED ON => Remove the "selectedTag" from the array ? => pop best way ?
  removeTag = () => {
    this.tags.pop();
    console.log(this.tags)
    this.filterInputs();
    this.displayRecipes();
  }

  displayRecipes = () => display.displayRecipes(this.filteredRecipes);

//   getIngredients = () => {
//     this.filteredRecipesIngredients = [
//       ...new Set(
//         recipes.flatMap((recipe) =>
//           recipe.ingredients.map((r) => formatIngredientString(r.ingredient))
//         )
//       ),
//     ];
//   };



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




