


// Button functions for opening and closing Dropdown buttons with options

const ingredientsArrow = document.querySelector("#arrowIngredients");

ingredientsArrow.addEventListener("click", () => {
  document.querySelector(".ingredientsContent").classList.toggle("show");  
  document.getElementById("arrowIngredients").classList.toggle("active");
  document.querySelector(".sortBtnIngredients").classList.toggle("active");
  document.querySelector("#ingredientsBtn").classList.toggle("active");
})

const appliancesArrow = document.querySelector("#arrowAppliances");

appliancesArrow.addEventListener("click", () => {
    document.querySelector(".appliancesContent").classList.toggle("show");
    document.getElementById("arrowAppliances").classList.toggle("active");
    document.querySelector(".sortBtnAppliances").classList.toggle("active");
    document.querySelector("#appliancesBtn").classList.toggle("active");
})

const ustensilsArrow = document.querySelector("#arrowUstensils");

ustensilsArrow.addEventListener("click", () => {
  document.querySelector(".ustensilsContent").classList.toggle("show");
  document.getElementById("arrowUstensils").classList.toggle("active");
  document.querySelector(".sortBtnUstensils").classList.toggle("active");
  document.querySelector("#ustensilsBtn").classList.toggle("active");
})






















