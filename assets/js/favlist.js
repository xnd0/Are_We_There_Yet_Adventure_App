// --------------------------------- \\
// -------- Javascript Page -------- \\
// -------- For user to save ------- \\
// ------------ places ------------- \\
// --------------------------------- \\

function showAddedFavorites() {
    var favoriteList = JSON.parse(localStorage.getItem("favLocation"));
    console.log(favoriteList)


    if (favoriteList !== null) {
        for (var i = 0; i < favoriteList.length; i++) {
            var createLi = document.createElement('li');
            createLi.textContent = favoriteList[i].savedInfo;
            saveList.appendChild(createLi);
        }
    }
}
showAddedFavorites();

// clear button to clear the local storage 
clearBtn.addEventListener('click', clearStorage);

function clearStorage() {
    localStorage.clear();
    location.reload();
}
clearStorage();