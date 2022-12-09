export default class DishRecipe {
  static numOfRecipes = 0;

  constructor(name, ingredients, time, cookingMethod, img) {
    this.id = ++DishRecipe.numOfRecipes;
    this.name = name;
    this.ingredients = ingredients;
    this.time = time;
    this.cookingMethod = cookingMethod;
    this.img = img;
  }

  getTotalCalories() {
    return this.ingredients.reduce((partSum, ing) => partSum + ing.Calories, 0);
  }

  getIngredients() {
    return this.ingredients;
  }
}
