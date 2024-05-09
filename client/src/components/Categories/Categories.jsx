import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Wrap,
  WrapItem,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { useUser } from "../Context/ContextConfig";
import axios from "axios";
const Categories = () => {
  const toast = useToast();
  // const { categories } = useUser();
  // console.log(categories);
  // console.log(currentUser);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userInfo = localStorage.getItem("userInfo");
  let authToken;
  if (userInfo) {
    authToken = JSON.parse(userInfo).token;
    //  console.log(authToken);
  }

  const fetchCategories = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      };
      const { data } = await axios.get(
        "http://127.0.0.1:8000/api/v1/category",
        config
      );
      console.log("doc",data.doc);
      setCategories(data.doc);
    
      console.log("categories",categories);
    } catch (error) {}
  };
  
  useEffect(() => {
    fetchCategories();
  }, []);
  const handleSave = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/v1/category",
        { name: category },
        config
      );
      
      if (data.status === "success") {
        toast({
          title: "Category is successfully created",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Category is already existed",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
      setCategory("");
    } catch (err) {
      toast({
        title: err.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  
  return (
    <Box p={5} display="flex" flexDirection="column" gap="10px">
      <Wrap>
        {categories.map((cat, index) => (
          <WrapItem key={index}>
            <Center w="180px" h="40px" bg="blue.200">
              {cat.name}
            </Center>
          </WrapItem>
        ))}
      </Wrap>
      <Box
        sx={{ position: "absolute", bottom: 10, right: 10 }}
        display="flex"
        justifyContent="flex-end"
      >
        <Box
          onClick={onOpen}
          border="1px solid white"
          p={2}
          borderRadius={10}
          display="flex"
          alignItems="center"
          gap={"5px"}
        >
          {" "}
          <span>
            <HiPlus />
          </span>
          Create New Category
        </Box>
      </Box>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton color="black" />
          <ModalBody>
            <FormControl>
              <FormLabel sx={{ color: "black" }}>Category</FormLabel>
              <Input
                sx={{ color: "black" }}
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Categories;
