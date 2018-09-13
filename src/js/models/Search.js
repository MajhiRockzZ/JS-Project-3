import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    // const key = 'eb056f7767ddd06d7589ba50be536978';
    const appId = '688e660e';
    const appKey = '6697b6714818a45958aedac392466716';
    try {
      // const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      const res = await axios(`https://api.edamam.com/search?q=${this.query}&app_id=${appId}&app_key=${appKey}&to=20`);
      this.result = [];
      this.recipeResult = res.data.hits.forEach(element => {
        let recipeData = element.recipe;
        this.result.push(recipeData);
        // console.log(recipeData);
      });
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
