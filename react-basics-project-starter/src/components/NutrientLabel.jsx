import { Flex, Text } from "@chakra-ui/react";


 //The component takes in a nutrient prop, which is an object that includes a quantity, unit, 
 //and label for a particular nutrient.
 
export const NutrientLabel = ({ nutrient }) => {
  let amount = nutrient.quantity.toFixed();
  if (nutrient.unit === "g" || nutrient.unit === "mg") {
    amount += nutrient.unit;
  }

  return (
    <Flex direction={"column"}>
      <Text fontSize={13} fontWeight={"semibold"} color={"gray.800"}>
        {amount}
      </Text>
      <Text fontSize={10} color={"gray.500"}>
        {nutrient.label.toUpperCase()}
      </Text>
    </Flex>
  );
};
