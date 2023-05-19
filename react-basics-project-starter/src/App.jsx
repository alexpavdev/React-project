import { useState } from "react";
import { Flex, useToast } from "@chakra-ui/react";

import { RecipesPage } from "./pages/RecipesPage";
import { RecipePage } from "./pages/RecipePage";

import { data } from "./utils/data";

//data formatting
const formattedData = data.hits.map((hit) => {
  const newUrl = hit.recipe.image.slice(4);
  return {
    ...hit,
    recipe: {
      ...hit.recipe,
      image: newUrl,
    },
  };
});

export const App = () => {

  //state variables defined
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filterTerm, setFilterTerm] = useState("All");
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);

  //toast notification
  const toast = useToast();

  // Filter recipes based on filterTerm
  let recipes = formattedData;

  if (filterTerm === "Vegetarian") {
    recipes = recipes.filter((recipe) =>
      recipe.recipe.healthLabels.includes("Vegetarian")
    );
  } else if (filterTerm === "Vegan") {
    recipes = recipes.filter((recipe) =>
      recipe.recipe.healthLabels.includes("Vegan")
    );
  } else if (filterTerm === "Favourites") {
    recipes = favouriteRecipes;
  }
 // We toggle recipe favourite status
  const toggleRecipeFavourite = (recipeToToggle) => {
    const index = favouriteRecipes.findIndex(
      (recipe) => recipe.recipe.label === recipeToToggle.label
    );
    if (index < 0) {
      recipeToToggle.favourited = true;
      toast({
        title: "Item added",
        description: `${recipeToToggle.label} added to favourites`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setFavouriteRecipes((prevRecipes) => [
        ...prevRecipes,
        { recipe: recipeToToggle },
      ]);
    } else {
      recipeToToggle.favourited = false;
      toast({
        title: "Item removed",
        description: `${recipeToToggle.label} removed from favourites`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setFavouriteRecipes((prevRecipes) => [
        ...prevRecipes.slice(0, index),
        ...prevRecipes.slice(index + 1),
      ]);
    }
  };

  return (
    <Flex minHeight="100vh" direction="column" bg="blue.900">
      {selectedRecipe ? (
        <RecipePage
          recipe={selectedRecipe}
          useRecipe={setSelectedRecipe}
          toggleRecipeFavourite={toggleRecipeFavourite}
        />
      ) : (
        <RecipesPage
          recipes={recipes}
          useRecipe={setSelectedRecipe}
          favouriteRecipes={favouriteRecipes}
          filterTerm={filterTerm}
          useFilterTerm={setFilterTerm}
        />
      )}
    </Flex>
  );
};
