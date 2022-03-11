// --------------------------------- \\
// -------- Javascript Page -------- \\
// --------------------------------- \\


const searchBtn = document.querySelector('#user-form');
const results = document.querySelector('#result-content');

// default map location
var map = L.map('map').setView([51.505, -0.09], 13);
// Los Angeles Latitude + Longitude
// var map = L.map('map').setView([34.052, -118.244], 13);


// Dropdown Picker Menu  >
var usStates = [
    { name: 'ALABAMA', abbreviation: 'AL'},
    { name: 'ALASKA', abbreviation: 'AK'},
    // { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
    { name: 'ARIZONA', abbreviation: 'AZ'},
    { name: 'ARKANSAS', abbreviation: 'AR'},
    { name: 'CALIFORNIA', abbreviation: 'CA'},
    { name: 'COLORADO', abbreviation: 'CO'},
    { name: 'CONNECTICUT', abbreviation: 'CT'},
    { name: 'DELAWARE', abbreviation: 'DE'},
    { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
    // { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
    { name: 'FLORIDA', abbreviation: 'FL'},
    { name: 'GEORGIA', abbreviation: 'GA'},
    // { name: 'GUAM', abbreviation: 'GU'},
    { name: 'HAWAII', abbreviation: 'HI'},
    { name: 'IDAHO', abbreviation: 'ID'},
    { name: 'ILLINOIS', abbreviation: 'IL'},
    { name: 'INDIANA', abbreviation: 'IN'},
    { name: 'IOWA', abbreviation: 'IA'},
    { name: 'KANSAS', abbreviation: 'KS'},
    { name: 'KENTUCKY', abbreviation: 'KY'},
    { name: 'LOUISIANA', abbreviation: 'LA'},
    { name: 'MAINE', abbreviation: 'ME'},
    // { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
    { name: 'MARYLAND', abbreviation: 'MD'},
    { name: 'MASSACHUSETTS', abbreviation: 'MA'},
    { name: 'MICHIGAN', abbreviation: 'MI'},
    { name: 'MINNESOTA', abbreviation: 'MN'},
    { name: 'MISSISSIPPI', abbreviation: 'MS'},
    { name: 'MISSOURI', abbreviation: 'MO'},
    { name: 'MONTANA', abbreviation: 'MT'},
    { name: 'NEBRASKA', abbreviation: 'NE'},
    { name: 'NEVADA', abbreviation: 'NV'},
    { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
    { name: 'NEW JERSEY', abbreviation: 'NJ'},
    { name: 'NEW MEXICO', abbreviation: 'NM'},
    { name: 'NEW YORK', abbreviation: 'NY'},
    { name: 'NORTH CAROLINA', abbreviation: 'NC'},
    { name: 'NORTH DAKOTA', abbreviation: 'ND'},
    // { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
    { name: 'OHIO', abbreviation: 'OH'},
    { name: 'OKLAHOMA', abbreviation: 'OK'},
    { name: 'OREGON', abbreviation: 'OR'},
    // { name: 'PALAU', abbreviation: 'PW'},
    { name: 'PENNSYLVANIA', abbreviation: 'PA'},
    // { name: 'PUERTO RICO', abbreviation: 'PR'},
    { name: 'RHODE ISLAND', abbreviation: 'RI'},
    { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
    { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
    { name: 'TENNESSEE', abbreviation: 'TN'},
    { name: 'TEXAS', abbreviation: 'TX'},
    { name: 'UTAH', abbreviation: 'UT'},
    { name: 'VERMONT', abbreviation: 'VT'},
    // { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
    { name: 'VIRGINIA', abbreviation: 'VA'},
    { name: 'WASHINGTON', abbreviation: 'WA'},
    { name: 'WEST VIRGINIA', abbreviation: 'WV'},
    { name: 'WISCONSIN', abbreviation: 'WI'},
    { name: 'WYOMING', abbreviation: 'WY' }
];

for (var i = 0; i<usStates.length; i++){
    var option = document.createElement("option");
    option.text = usStates[i].name+' ['+usStates[i].abbreviation+']';
    option.value = i;
    var select = document.getElementById("state");
    select.appendChild(option);
}
//  < End Dropdown Picker Menu





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


// Connects to MapBox tile
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    // id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieG5kY21kIiwiYSI6ImNsMGxvdnF4aTB5OWMzYmw0bzRxZWEwaDQifQ.0OevUWqcsyWAe5gbtCUPvQ'
}).addTo(map);



searchBtn.addEventListener('click', statePark);








