

const searchInput = document.querySelector("#searchInput")
searchInput.addEventListener("keyup", function(e){
    let nameItems = document.querySelectorAll(".recipeCards")

    if(e.target.value.length > 2) {
        let searchItem = e.target.value.toLowerCase();
        nameItems.forEach((item) => {
            if(item.textContent.toLowerCase().indexOf(searchItem) !== -1){
                item.closest("article").style.display = "block";
            } else {
                item.closest("article").style.display = "none";
            }
        });
    } else {
        nameItems.forEach((item) => {
            item.closest("article").style.display = "block";
        })
    }
})


// const ingredientOption = document.querySelector(".ingredientsOption")
// ingredientOption.addEventListener("click", (e) => {
   
//     if(e.target.value)
// })