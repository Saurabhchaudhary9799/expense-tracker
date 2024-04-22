import { Box, Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Transaction from "../Transaction/Transaction";
import { Outlet } from "react-router-dom";
const DescriptionBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
       
      <Box pl='5' display='flex' alignItems='center' borderBottom="1px solid white">
      <Show breakpoint='(max-width: 600px)'> <span> <GiHamburgerMenu/></span>
      </Show>
      <Box position="relative">
        <Box
          onClick={() => setIsOpen(!isOpen)}
          display="flex"
          alignItems="center"
          gap="3px"
          
          py="5px"
          pl="10px"
        >
          April 2024{" "}
          {isOpen ? (
            <span>
              <IoMdArrowDropup />
            </span>
          ) : (
            <span>
              <IoMdArrowDropdown />
            </span>
          )}
        </Box>
        {isOpen && (
          <Box
            w="250px"
            background="white"
            color="black"
            sx={{ position: "absolute", top: "10", left: "10px", zIndex: 10 }}
            p="2"
            borderRadius="10px"
          >
            <Grid templateColumns="repeat(2, 1fr)" gap={3}>
              <GridItem
                borderRadius="10px"
                color="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="100%"
                h="10"
                bg="blue.500"
              >
                This month
              </GridItem>
              <GridItem
                borderRadius="10px"
                color="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="100%"
                h="10"
                bg="blue.500"
              >
                last month
              </GridItem>
              <GridItem
                borderRadius="10px"
                color="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="100%"
                h="10"
                bg="blue.500"
              >
                last 3 month
              </GridItem>
              <GridItem
                borderRadius="10px"
                color="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="100%"
                h="10"
                bg="blue.500"
              >
                last 6 month
              </GridItem>
              <GridItem
                borderRadius="10px"
                color="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="100%"
                h="10"
                bg="blue.500"
              >
                All time
              </GridItem>
              <GridItem
                borderRadius="10px"
                color="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="100%"
                h="10"
                bg="blue.500"
              >
                custom...
              </GridItem>
            </Grid>
          </Box>
        )}
      </Box>
      </Box>
     

      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DescriptionBox;
