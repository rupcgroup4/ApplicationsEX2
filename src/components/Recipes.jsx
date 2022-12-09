import React from 'react';
import Recipe from './Recipe';
import { Box, Grid, Typography, Container } from '@mui/material';

const Recipes = ({ recipes, title, dishHandler, ready }) => {
  return (
    <Box textAlign={'center'}>
      {/* {recipes.length > 0 && ( */}
      <Typography variant='h4' pt={5} pb={2}>
        {title} {recipes.length}
      </Typography>
      {/* )} */}
      <Container maxWidth={'md'}>
        <Grid container display={'flex'} justifyContent={'center'}>
          {recipes.map((recipe, idx) => (
            <Grid key={idx} item xs={12} md={4} m={1}>
              <Recipe recipe={recipe} dishHandler={dishHandler} ready={ready} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Recipes;
