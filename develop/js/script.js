// --------------------------------- \\
// -------- Javascript Page -------- \\
// --------------------------------- \\

const searchBtn = document.querySelector('#user-form');
const results = document.querySelector('#result-content');



function statePark(e) {
    e.preventDefault();


    var searchInputVal = document.querySelector('#search-city').value;

    if (!searchInputVal) {
        console.error('You need to search for a city!')
        return;
    }

    searchApi(searchInputVal);

}

function searchApi(state) {
    var apiUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=EVbj21l5TvXpId2wduNH8JdzY1kYN849zHPznIgn`

    fetch(apiUrl).then(response => response.json())
        .then(data => {
            console.log(data);
        })

}





searchBtn.addEventListener('click', statePark);








