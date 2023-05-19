import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchBar = ({ searchTerm, useSearchTerm }) => {
  const handleChange = (e) => {
    useSearchTerm(e.target.value);
  };
//includes inline styling,such as hover effects and a custom focus style.
  return (
    <InputGroup bg={"#00000099"}>
      <InputLeftAddon bg={"white"}>
        <Search2Icon color={"blue.600"} />
      </InputLeftAddon>
      <Input
        placeholder="Search:"
        color={"white"}
        onChange={handleChange}
        value={searchTerm}
        fontWeight={"inherit"}
        bg={"#00000099"}
        _focus={{ outline: "none", bg: "#00000099" }}
        _hover={{ bg: "#00000099" }}
        borderRadius={"0px"}
        border={"none"}
      ></Input>
    </InputGroup>
  );
};
