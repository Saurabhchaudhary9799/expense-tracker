import {  Stat, StatGroup, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const Stats = () => {
  return (
    <StatGroup gap='10px'>
          <Stat border="1px solid white" p='4' borderRadius='10px'>
            <StatLabel>Expense</StatLabel>
            <StatNumber display='flex' gap='5px' alignItems='center'> <span><FaRupeeSign/></span>345,670</StatNumber>
          </Stat>

          <Stat border="1px solid white" p='4' borderRadius='10px'>
            <StatLabel>Income</StatLabel>
            <StatNumber display='flex' gap='5px' alignItems='center'> <span><FaRupeeSign/></span>345,670</StatNumber>
          </Stat>
          <Stat border="1px solid white" p='4' borderRadius='10px'>
            <StatLabel>Balance</StatLabel>
            <StatNumber display='flex' gap='5px' alignItems='center'> <span><FaRupeeSign/></span>345,670</StatNumber>
          </Stat>
          <Stat border="1px solid white" p='4' borderRadius='10px'>
            <StatLabel>Carry Forward</StatLabel>
            <StatNumber display='flex' gap='5px' alignItems='center'> <span><FaRupeeSign/></span>345,670</StatNumber>
          </Stat>
          <Stat border="1px solid white" p='4' borderRadius='10px'>
            <StatLabel>Balance with C/F</StatLabel>
            <StatNumber display='flex' gap='5px' alignItems='center'> <span><FaRupeeSign/></span>345,670</StatNumber>
          </Stat>
        </StatGroup>
  )
}

export default Stats