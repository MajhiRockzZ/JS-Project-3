import { elements } from './base';

export const getInput = () => elements.searchInput.value;

const renderRecipe = recipes => {

}

export const renderResults = recipes => {
  recipes.foreach(renderRecipe);
}