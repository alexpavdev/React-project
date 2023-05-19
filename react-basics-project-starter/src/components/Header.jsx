import { Flex, Text } from "@chakra-ui/react";

export const Header = ({ filterTerm, useFilterTerm }) => {
  const selectedTabStyles = {
    color: "blue.500",
    borderBottom: "2px solid blue.500",
  };

  const filterTabStyles = {
    py: 3,
    cursor: "pointer",
    _hover: { textDecoration: "underline" },
    borderBottom: "2px solid white",
  };

  return (
    <Flex color="white" justify="space-evenly" w="100%">
      <Text
        {...filterTabStyles}
        style={filterTerm === "All" ? selectedTabStyles : {}}
        onClick={() => useFilterTerm("All")}
      >
        All
      </Text>
      <Text
        {...filterTabStyles}
        style={filterTerm === "Vegetarian" ? selectedTabStyles : {}}
        onClick={() => useFilterTerm("Vegetarian")}
      >
        Vegetarian
      </Text>
      <Text
        {...filterTabStyles}
        style={filterTerm === "Vegan" ? selectedTabStyles : {}}
        onClick={() => useFilterTerm("Vegan")}
      >
        Vegan
      </Text>
      <Text
        {...filterTabStyles}
        style={filterTerm === "Favourites" ? selectedTabStyles : {}}
        onClick={() => useFilterTerm("Favourites")}
      >
        Favourites
      </Text>
    </Flex>
  );
};
