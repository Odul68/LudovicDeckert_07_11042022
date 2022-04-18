

const searchInput = document.querySelector("#searchInput")
searchInput.addEventListener("keyup", function(e){
    let searchItem = e.target.value.toLowerCase();
    let nameItems = document.querySelectorAll(".recipeName")

    nameItems.forEach((item) => {
        if(item.textContent.toLowerCase().indexOf(searchItem) != -1){
            item.closest("article").style.display = "block";
        } else {
            item.closest("article").style.display = "none";
        }
        console.log(item.textContent)
    })

    console.log(nameItems)
})