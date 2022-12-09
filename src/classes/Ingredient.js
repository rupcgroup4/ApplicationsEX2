export default class Ingredient {
  static numOfIngreditents = 0;

  constructor(name, img, calories) {
    this.id = ++Ingredient.numOfIngreditents;
    this.name = name;
    this.img = img;
    this.calories = calories;
  }

  get Calories() {
    return this.calories;
  }
}
