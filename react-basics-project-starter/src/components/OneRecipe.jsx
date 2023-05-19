import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { Labels } from "./Labels";

export const OneRecipe = ({ recipe, useRecipe }) => {
  //The recipe object is destructured into its properties
  const { healthLabels, dietLabels, cautions, dishType, mealType, label, image } = recipe;
  
//A helper function that checks if the labels array is empty or not, and if not,
// it returns a Labels component with the given labels and background color.
  const renderLabels = (labels, bg) => {
    if (!labels || labels.length === 0) return null;
    return <Labels labels={labels} bg={bg} />;
  };

  return (
    <Box
      w={320}
      borderRadius="lg"
      borderWidth="1px"
      bg="white"
      boxShadow={"2xl"}
      overflow="hidden"
      mt={10}
      p={5}
      transition={"opacity 200ms ease"}
      _hover={{
        cursor: "pointer",
        opacity: "0.7",
      }}
      onClick={() => useRecipe(recipe)}
    >
      <Image
        src={image}
        h={160}
        w={"100%"}
        objectFit="cover"
        borderBottom={"3px solid black"}
      ></Image>
      <Flex
        direction="column"
        align={"center"}
        mt={4}
        textAlign="center"
        gap={3}
        color={"gray.700"}
        fontSize={"xs"}
      >
        <Text color="gray.400" fontWeight={"bold"}>
          {mealType[0].toUpperCase()}
        </Text>
        <Text color="gray.900" fontSize={"xl"} fontWeight="extrabold">
          {label}
        </Text>
        {renderLabels(healthLabels.filter((label) => label === "Vegetarian" || label === "Vegan"), "purple.100")}
        {renderLabels(dietLabels, "green.100")}
        <Text>
          Dish: <b>{dishType[0].toUpperCase() + dishType.slice(1)}</b>
        </Text>
        {renderLabels(cautions, "red.100")}
      </Flex>
    </Box>
  );
};
