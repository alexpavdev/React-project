import { Flex, Heading, Text } from "@chakra-ui/react";
//component to offer information about a selected recipe
export const RecipeInfo = ({ recipe }) => {
  const renderIngredients = () => {
    return recipe.ingredientLines.map((line) => (
      <Text key={line} mb={2} color="purple.700">
        {line}
      </Text>
    ));
  };

  return (
    <Flex className="recipe-information" direction="column" gap={4}>
      <Text color="gray.500" fontWeight="bold">
        {recipe.dishType[0].toUpperCase()}
      </Text>
      <Heading>{recipe.label}</Heading>
      <Text>
        Total cooking time: <b>{recipe.totalTime} minutes</b>
      </Text>
      <Text>
        Servings: <b>{recipe.yield}</b>
      </Text>
      <Text>
        <b>Ingredients:</b>
      </Text>
      {renderIngredients()}
    </Flex>
  );
};
