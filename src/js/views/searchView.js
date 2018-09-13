import {
  elements
} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearResults = () => {
  elements.searchResList.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split('').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);

    // return the result
    return `${newTitle.join(' ')} ...`;
  }
  return title
}

const renderRecipe = recipe => {
  const markup = `
  <li>
  <a class="results__link" href="#${recipe.uri}">
      <figure class="results__fig">
          <img src="${recipe.image}" alt="${recipe.label}">
      </figure>
      <div class="results__data">
          <h4 class="results__name">${limitRecipeTitle(recipe.label)}</h4>
          <p class="results__author">${recipe.source}</p>
      </div>
  </a>
</li>
  `;
  elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

const renderButtons = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage);

  if (page === 1) {
    // Only button to go to next page
  } else if (page < pages) {
    // Both buttons
  } else if (page == pages) {
    // Only button to go to prev page
  }
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;

  recipes.slice(start, end).forEach(renderRecipe);
};