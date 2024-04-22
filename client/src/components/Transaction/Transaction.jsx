import { Box} from "@chakra-ui/react";
import React from "react";

import Stats from "./Stats";
import TransactionList from "./TransactionList";

const Transaction = () => {
  return (
    <Box>
      <Box p='3'>
         <Stats/>
      </Box>
      <Box  p='3'>
        <TransactionList/>
      </Box>
    </Box>
  );
};

export default Transaction;
