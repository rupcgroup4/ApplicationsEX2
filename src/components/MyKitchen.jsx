import { Component } from 'react';
import Recipes from './Recipes';
import Ingredient from '../classes/Ingredient';
import DishRecipe from '../classes/DishRecipe';
import { Box } from '@mui/material';
import { data } from '../utils/data';

class MyKitchen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipesDone: [],
    };
    this.ingredients = [];
  }

  componentDidMount() {
    this.initialState();
  }

  initialState = () => {
    const ingredients = data.ingredients.map(
      (ing) => new Ingredient(ing.title, ing.img, ing.calories)
    );
    this.ingredients.push(ingredients);

    const recipes = data.dishRecipes.map((dish) => {
      const ingredients = dish.ingredients.map((ing) => this.ingredients[ing]);
      return new DishRecipe(
        dish.title,
        ingredients,
        dish.cookingTime,
        dish.cookingMethod,
        dish.img
      );
    });

    this.setState({ recipes: recipes });
  };

  prepareDish = (recipeId) => {
    this.setState({
      recipesDone: [
        ...this.state.recipesDone,
        ...this.state.recipes.filter((recipe) => recipe.id === recipeId),
      ],
    });
    this.setState({
      recipes: this.state.recipes.filter((recipe) => recipe.id !== recipeId),
    });
  };

  eatDish = (recipeId) => {
    this.setState({
      recipes: [
        ...this.state.recipes,
        ...this.state.recipesDone.filter((recipe) => recipe.id === recipeId),
      ],
    });
    this.setState({
      recipesDone: this.state.recipesDone.filter(
        (recipe) => recipe.id !== recipeId
      ),
    });
  };

  render() {
    return (
      <Box mt={5}>
        <Recipes
          recipes={this.state.recipes}
          title={'Make Recipes'}
          dishHandler={this.prepareDish}
          ready={false}
        />
        <Recipes
          recipes={this.state.recipesDone}
          title={'Eat Recipes'}
          dishHandler={this.eatDish}
          ready={true}
        />
      </Box>
    );
  }
}

export default MyKitchen;
