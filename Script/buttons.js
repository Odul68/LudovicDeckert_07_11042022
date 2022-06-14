


// Button functions for opening and closing Dropdown buttons with options


// Opening ingredients function

let openIngredientsButton = () => {
  const ingredientsArrow = document.querySelector("#arrowIngredients");

  ingredientsArrow.addEventListener("click", () => {
    document.querySelector(".ingredientsContent").classList.toggle("show");  
    document.getElementById("arrowIngredients").classList.toggle("active");
    document.querySelector(".sortBtnIngredients").classList.toggle("active");
    document.querySelector("#ingredientsBtn").classList.toggle("active");
  })
};
openIngredientsButton();

// Closing ingredients function

let closingIngredientsButton = () => {
  document.addEventListener("click", (event) => { 
  if (event.target.closest("#ingredientsBtn")) return;

    document.querySelector(".ingredientsContent").classList.remove("show");  
    document.getElementById("arrowIngredients").classList.remove("active");
    document.querySelector(".sortBtnIngredients").classList.remove("active");
    document.querySelector("#ingredientsBtn").classList.remove("active");
  });
};
closingIngredientsButton();



// Opening appliances function

let openAppliancesButton = () => {
  const appliancesArrow = document.querySelector("#arrowAppliances");

  appliancesArrow.addEventListener("click", () => {
      document.querySelector(".appliancesContent").classList.toggle("show");
      document.getElementById("arrowAppliances").classList.toggle("active");
      document.querySelector(".sortBtnAppliances").classList.toggle("active");
      document.querySelector("#appliancesBtn").classList.toggle("active");
  })
};
openAppliancesButton();

// Closing appliances function

let closingAppliancesButton = () => {
  document.addEventListener("click", (event) => { 
  if (event.target.closest("#appliancesBtn")) return;

  document.querySelector(".appliancesContent").classList.remove("show");
  document.getElementById("arrowAppliances").classList.remove("active");
  document.querySelector(".sortBtnAppliances").classList.remove("active");
  document.querySelector("#appliancesBtn").classList.remove("active");
  });
};
closingAppliancesButton();



// Opening ustensils function

let openUstensilsButton = () => {
  const ustensilsArrow = document.querySelector("#arrowUstensils");

  ustensilsArrow.addEventListener("click", () => {
    document.querySelector(".ustensilsContent").classList.toggle("show");
    document.getElementById("arrowUstensils").classList.toggle("active");
    document.querySelector(".sortBtnUstensils").classList.toggle("active");
    document.querySelector("#ustensilsBtn").classList.toggle("active");
  });
};
openUstensilsButton();

// Closing ustensils function

let closingUstensilsButton = () => {
  document.addEventListener("click", (event) => { 
    if (event.target.closest("#ustensilsBtn")) return;

      document.querySelector(".ustensilsContent").classList.remove("show");
      document.getElementById("arrowUstensils").classList.remove("active");
      document.querySelector(".sortBtnUstensils").classList.remove("active");
      document.querySelector("#ustensilsBtn").classList.remove("active");
    });
};
closingUstensilsButton();























