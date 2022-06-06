import recipes from "../recipes.js";
import display from "./display.js";



const formatIngredientString = (i) => {
  let g = i.toLowerCase();
  return `${i[0].toUpperCase()}${g.slice(1)}`;  
};


export class Filters {
  recipeList = recipes;
  filteredRecipes = [];
  filteredRecipesIngredients = []
  filteredRecipesAppliances = [];
  filteredRecipesUstensils = [];
  tags = [];
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


  removeTag = (tag) => {
    this.tags = this.tags.filter((item) => {
      return item.toLowerCase() !== tag.toLowerCase();
    });
    this.filterInputs(this.searchItem);
    this.displayRecipes();
  }



  getIngredients = () => {
    this.filteredRecipesIngredients = 
      [ ...new Set(
        this.filteredRecipes.flatMap((recipe) =>
        recipe.ingredients.map((r) => formatIngredientString (r.ingredient))
        )
    )];
    this.filteredRecipes;
  }


  getAppliances = () => {
    this.filteredRecipesAppliances = 
    [...new Set(
      recipes.map((recipe) => recipe.appliance)
      )];
  }


  getUstensils = () => {
    this.filteredRecipesUstensils =
    [...new Set(
      recipes.flatMap((recipe) => recipe.ustensils)
      )];
  }


  displayRecipes = () => {

    display.displayRecipes(this.filteredRecipes),
    this.getIngredients(),
    this.getAppliances(),
    this.getUstensils();

    // ======================= closes the ul when first tag is clicked on and can't select a second one ===================================

    display.displayIngredientsButton(this.filteredRecipesIngredients);
    // display.displayAppliancesButton(this.filteredRecipesAppliances)
    // display.displayUstensilsButton(this.filteredRecipesUstensils)

// ======================= closes the ul when first tag is clicked on and can't select a second one ===================================

  };

}

let filter = new Filters();
export default filter;



