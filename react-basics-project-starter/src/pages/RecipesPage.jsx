import { Flex, Grid, Heading } from "@chakra-ui/react";
import { SearchBar } from "../components/ui/SearchBar";
import { useState } from "react";
import { OneRecipe } from "../components/OneRecipe";
import { Header } from "../components/Header";

/*The RecipesPage component is defined with destructured props: recipes, useRecipe, filterTerm, and useFilterTerm.

Inside the component, a searchTerm state and useSearchTerm function are created using the useState hook */

export const RecipesPage = ({
  recipes,
  useRecipe,
  filterTerm,
  useFilterTerm,
}) => {
  const [searchTerm, useSearchTerm] = useState("");

  // Filter results by search term
  recipes = recipes.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

/*A Grid component is rendered to create a responsive grid layout for the recipe cards.
 The number of columns is adjusted based on the screen width.
 Inside of it, a mapping function is used to iterate over
 the recipes array and render a RecipeCard component for each recipe. 
 Then the OneRecipe component receives the recipe and useRecipe props.*/
  return (
    <Flex direction="column" align="center" p={10}>
      <Header useFilterTerm={useFilterTerm} filterTerm={filterTerm} />
      <Heading
        color="cyan.500"
        fontSize={["4xl", "5xl", "6xl"]}
        letterSpacing={1.5}
        fontWeight="semibold"
        borderBottom="1px solid white"
        my={10}
      >
        Winc Menu!
      </Heading>
      <SearchBar
        searchTerm={searchTerm}
        useSearchTerm={useSearchTerm}
        mt={10}
        w={["90%", "80%", "60%"]}
        fontWeight="bold"
        color="gray.200"
      />
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          null,
          "repeat(2, 1fr)",
          null,
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={8}
        justifyContent="center"
        mt={12}
      >
        {recipes.map((recipe) => (
          <OneRecipe
            key={recipe.recipe.label}
            recipe={recipe.recipe}
            useRecipe={useRecipe}
          />
        ))}
      </Grid>
    </Flex>
  );
};
