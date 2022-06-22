import recipes from "../recipes.js";
import display from "./display.js";


// Format options for the filteredRecipes
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
 




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ CHOSEN ALSO +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





// Filter all recipes by input and display the mathing ones


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




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ CHOSEN ALSO +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





// Filter all recipes by tag ingredients, appliances or ustensils   


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


// When a tag is added => filterInputs to filter all recipes


  addTag = (tag) => {
    if (this.tags.includes(tag.toLowerCase())) {
      return false;
    }
    this.tags = [...this.tags, tag.toLowerCase()];
    this.filterInputs(this.searchItem);
    this.displayRecipes();
    return true;
  };


 // When a tag is removed => filterInputs to filter all recipes already filtered or not and keeps the previous filter
 

  removeTag = (tag) => {
    this.tags = this.tags.filter((item) => {
      return item.toLowerCase() !== tag.toLowerCase();
    });
    this.filterInputs(this.searchItem);
    this.displayRecipes();
  }


// Update the INGREDIENTS list in the Dropdown button once a search has already been entered


  getIngredients = () => {
    this.filteredRecipesIngredients = 
      [ ...new Set(
        this.filteredRecipes.flatMap((recipe) =>
        recipe.ingredients.map((r) => formatIngredientString (r.ingredient))
        )
    )];
  }


// Update the APPLIANCES list in the Dropdown button once a search has already been entered


  getAppliances = () => {
    this.filteredRecipesAppliances = 
    [...new Set(
      this.filteredRecipes.map((recipe) => formatIngredientString(recipe.appliance))
      )];
  }


// Update the USTENSILS list in the Dropdown button once a search has already been entered


  getUstensils = () => {
    this.filteredRecipesUstensils =
    [...new Set(
      this.filteredRecipes.flatMap((recipe) => 
      recipe.ustensils.map((u) => formatIngredientString (u))
      )
      )];
  }


// Display the filtered recipes and the new lists in the Dropdown buttons


  displayRecipes = () => {

    display.displayRecipes(this.filteredRecipes);
    this.getIngredients();
    this.getAppliances();
    this.getUstensils();


    display.displayIngredientsButton(this.filteredRecipesIngredients);
    display.displayAppliancesButton(this.filteredRecipesAppliances);
    display.displayUstensilsButton(this.filteredRecipesUstensils);
  };

}

let filter = new Filters();
export default filter;




