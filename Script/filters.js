import recipes from "../recipes.js";
import display from "./display.js";

export class Filters {
  recipeList = recipes;
  filteredRecipes = [];
  filteredRecipesIngredients = [];
  filteredRecipesAppliances = [];
  filteredRecipesUstensils = [];
  tags = [];
  selectedTags = []; // to use in removeTag ? 
  searchItem = "";

  inputFilter = (input) => {
    let searchItem = input && input.toLowerCase();
    this.searchItem = searchItem ;
    if (!this.searchItem) {
      return this.recipeList;
    }

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

  filterInputs = (value) => {
    this.searchItem = value
    let filteredRecipesinit = this.inputFilter(value);


    if (this.tags.length) {

      const finalList = filteredRecipesinit.filter((item) => {
      const recipeIngrdients = item.ingredients.map((ingre) => ingre.ingredient.toLowerCase());
      const recipeUstensils = item.ustensils.map((us) => us.toLowerCase());
      const recipeAppliance = item.appliance.toLowerCase();
      const res = this.tags.filter((tag) =>
        [recipeAppliance, ...recipeIngrdients, ...recipeUstensils].includes(tag));

        return res.length === this.tags.length;
      });

      this.filteredRecipes = finalList;

    } else {
        this.filteredRecipes = filteredRecipesinit;
    }
  };

  addTag = (tag) => {
    if (this.tags.includes(tag)) {
      return;
    }
    this.tags = [...this.tags, tag.toLowerCase()];
    this.filterInputs(this.searchItem);
    this.displayRecipes();
  };

        // WHEN CLICKED ON => Remove the "selectedTag" from the array ? => pop best way ?
  removeTag = (tag) => {
    this.tags = this.tags.filter((item) => {
      return item.toLowerCase() !== tag.toLowerCase();
    });
    this.filterInputs(this.searchItem);
    this.displayRecipes();
  }

  displayRecipes = () => display.displayRecipes(this.filteredRecipes);

}

let filter = new Filters();
export default filter;




