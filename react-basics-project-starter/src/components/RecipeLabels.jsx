import { Flex, Heading, List, ListItem } from "@chakra-ui/react";
import { Labels } from "./Labels";
import { NutrientLabel } from "./NutrientLabel";
//The component receives a prop recipe(object that contains recipe data)
export const RecipeLabels = ({ recipe }) => {
  // array of relevant nutrient keys.
  const relevantNutrientsKeys = [
    "ENERC_KCAL",
    "CHOCDF",
    "PROCNT",
    "FAT",
    "CHOLE",
    "NA",
  ];
 // an array obtained by mapping over relevantNutrientsKeys and accessing the corresponding values from recipe.totalNutrients
  const nutrientLabels = relevantNutrientsKeys.map(
    (key) => recipe.totalNutrients[key]
  );

  const dietLabelsJSX = (
    <>
      <Heading>Diet:</Heading>
      <Labels labels={recipe.dietLabels} bg={"green.100"} />
    </>
  );
  const cautionLabelsJSX = (
    <>
      <Heading>Cautions:</Heading>
      <Labels labels={recipe.cautions} bg={"red.100"} />
    </>
  );

  return (
    // Flex container with a vertical direction and a gap between child elements
    //later a Flex container with wrap and a gap between child elements.
    //then it maps over the nutrientLabels array and renders a NutrientLabel component for each nutrient 
    <Flex direction="column" gap={3}>
      <Heading>Health Labels:</Heading>
      <Labels labels={recipe.healthLabels} bg={"purple.100"} />
      {recipe.dietLabels.length > 0 && dietLabelsJSX}
      {recipe.cautions.length > 0 && cautionLabelsJSX}
      <Heading>Total Nutrients:</Heading>
      <Flex wrap={"wrap"} gap={5}>
        {nutrientLabels.map((nutrient) => {
          return <NutrientLabel key={nutrient.label} nutrient={nutrient} />;
        })}
      </Flex>
      <Heading>Ingredients:</Heading>
      <List>
        {recipe.ingredients.map((ingredient) => (
          <ListItem key={ingredient.text}>{ingredient.text}</ListItem>
        ))}
      </List>
    </Flex>
  );
};
