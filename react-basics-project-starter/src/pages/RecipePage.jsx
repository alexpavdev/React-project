import { Box, Flex, Grid, IconButton, Image } from "@chakra-ui/react";
import { RecipeInfo } from "../components/RecipeInfo";
import { RecipeLabels } from "../components/RecipeLabels";
import { ArrowBackIcon, StarIcon } from "@chakra-ui/icons";
/*The RecipePage component renders a box using the Box component from Chakra UI
The width of the box is set to "100%" for small screens and "70%" for larger screens
Inside the box we have a Flex component that displays two IconButton components 
Then there is also a Grid component with two columns. The left column displays the recipe information
 using the RecipeInfo component, which is passed the recipe prop.
The right column displays the recipe labels using the RecipeLabels component, also passed the recipe prop.*/ 

export const RecipePage = ({ recipe, useRecipe, toggleRecipeFavourite }) => {
  return (
    <Box bg="gray.100" w={["100%", null, "70%"]} mx="auto" maxW={800} p={4}>
      <Flex justify="space-between" alignItems="center">
        <IconButton
          icon={<ArrowBackIcon />}
          aria-label="Go back"
          p={2}
          bg="none"
          onClick={() => useRecipe(null)}
        />
        <IconButton
          icon={
            <StarIcon
              fontSize={20}
              color={recipe.favourited ? "yellow.400" : "gray.400"}
            />
          }
          aria-label="Toggle favorite"
          p={2}
          bg="none"
          onClick={() => toggleRecipeFavourite(recipe)}
        />
      </Flex>

      <Image src={recipe.image} w="100%" h={[200, 300, 400]} objectFit="cover" />

      <Grid templateColumns={["1fr", null, null, "5fr 4fr"]} p={4} gap={6}>
        <RecipeInfo recipe={recipe} />
        <RecipeLabels recipe={recipe} />
      </Grid>
    </Box>
  );
};
