import React from 'react';
const recipeContext = React.createContext(null);

export const RecipeProvider = recipeContext.Provider;
export const RecipeConsumer = recipeContext.Consumer;
export default recipeContext;
