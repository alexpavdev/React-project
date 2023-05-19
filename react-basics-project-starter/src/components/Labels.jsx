import { Flex, Text } from "@chakra-ui/react";

//takes an array of label strings as a prop (labels) and renders a Text component for each label

export const Labels = ({ labels, ...styling }) => {
  return (
    //Flex used to align the labels in a row, with a gap of 2 units between each label.
    <Flex gap={2} wrap={"wrap"}>
      {labels.map((label) => (
        <Text
          key={label}
          borderRadius={999}
          p={2}
          fontWeight={"semibold"}
          color={"black"}
          bg={"blue.800"}
          fontSize={"sm"}
          {...styling}
        >
          {label}
        </Text>
      ))}
    </Flex>
  );
};
