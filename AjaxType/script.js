const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data));


const search = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');
const closeBtn = document.querySelector('.close-btn');

const findMatches = (searchedValue, cities) => {
    searchedValue = searchedValue.trim().toLowerCase();
    return cities.filter(place => {
        return (place.city.trim().toLowerCase().includes(searchedValue) || place.state.trim().toLowerCase().includes(searchedValue))
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    if(this.value.trim().length === 0){
        clearList();
        return;
    }
    suggestion.innerHTML =
        matchArray.length > 0 ? matchArray.map(value => {
            return `
           <li>
                <span class="name">${value.city} , ${value.state}</span>
                <span class="population">${value.population}</span>
            </li>
        `
        }).join(' ') : `<h3> No results Found!! </h3>`

}

const clearList = () => {
    search.value = '';
    suggestion.innerHTML = ''
}

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);
closeBtn.addEventListener('click', clearList);




