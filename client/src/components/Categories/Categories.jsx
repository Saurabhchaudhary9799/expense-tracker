import { Box, Center, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { HiPlus } from "react-icons/hi";
const Categories = () => {
  return (
    <Box p={5} display='flex' flexDirection='column' gap='10px'>
      <Wrap >
        <WrapItem>
          <Center w="180px" h="40px" bg="red.200">
            Food
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="green.200">
            Junk Food
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="tomato">
            Shopping
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="blue.200">
            Stationary
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="blue.200">
            Russian
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="blue.200">
            Party
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="blue.200">
            Other Things
          </Center>
        </WrapItem>
      </Wrap>
       <Box sx={{position:"absolute" , bottom:10, right:10}} display='flex' justifyContent='flex-end'  >
          <Box border='1px solid white' p={2} borderRadius={10} display='flex' alignItems='center' gap={'5px'}> <span ><HiPlus/></span>Create New Category</Box>
       </Box>
    </Box>
  );
};

export default Categories;
