import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

const Recipe = ({ recipe, dishHandler, ready }) => {
  return (
    <Card>
      <CardMedia component='img' height='140' image={recipe.img} />
      <CardContent>
        <Typography variant='h6'>{recipe.name}</Typography>
        <Typography variant='subtitle1'>{recipe.cookingMethod}</Typography>
        {ready ? (
          <Button
            variant='outlined'
            color='error'
            onClick={() => dishHandler(recipe.id)}
          >
            Eat Dish!
          </Button>
        ) : (
          <Button variant='outlined' onClick={() => dishHandler(recipe.id)}>
            Prepare Dish!
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Recipe;
