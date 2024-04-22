import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
const TransactionList = () => {
  return (
     <Box display='flex' flexDirection='column' className='transactions-list' gap='5px'  >
         <Box >
             <Box display='flex' alignItems='center'> <Text fontWeight='600' fontSize='25px' gap='5px' pl='2'>19</Text>Apr 24,Wed</Box>
             <Box display='flex' flexDirection='column'  py='1' gap='10px'>
                <Box  bg='teal.500' display='flex' justifyContent='space-between' px='20px' borderRadius='10px' >
                    <Box>Junk Food</Box>
                    <Box display='flex' alignItems='center'><Text><FaRupeeSign/></Text>100.00</Box>
                </Box>
                <Box bg='teal.500' display='flex' justifyContent='space-between' px='20px' borderRadius='10px' >
                    <Box>Junk Food</Box>
                    <Box display='flex' alignItems='center'><Text><FaRupeeSign/></Text>100.00</Box>
                </Box>
             </Box>
         </Box>
         <Box >
             <Box display='flex' alignItems='center'> <Text fontWeight='600' fontSize='25px' gap='5px' pl='2'>19</Text>Apr 24,Wed</Box>
             <Box display='flex' flexDirection='column'  py='1' gap='10px'>
                <Box  bg='teal.500' display='flex' justifyContent='space-between' px='20px' borderRadius='10px' >
                    <Box>Junk Food</Box>
                    <Box display='flex' alignItems='center'><Text><FaRupeeSign/></Text>100.00</Box>
                </Box>
                <Box bg='teal.500' display='flex' justifyContent='space-between' px='20px' borderRadius='10px' >
                    <Box>Junk Food</Box>
                    <Box display='flex' alignItems='center'><Text><FaRupeeSign/></Text>100.00</Box>
                </Box>
             </Box>
         </Box>
         <Box >
             <Box display='flex' alignItems='center'> <Text fontWeight='600' fontSize='25px' gap='5px' pl='2'>19</Text>Apr 24,Wed</Box>
             <Box display='flex' flexDirection='column'  py='1' gap='10px'>
                <Box  bg='teal.500' display='flex' justifyContent='space-between' px='20px' borderRadius='10px' >
                    <Box>Junk Food</Box>
                    <Box display='flex' alignItems='center'><Text><FaRupeeSign/></Text>100.00</Box>
                </Box>
                <Box bg='teal.500' display='flex' justifyContent='space-between' px='20px' borderRadius='10px' >
                    <Box>Junk Food</Box>
                    <Box display='flex' alignItems='center'><Text><FaRupeeSign/></Text>100.00</Box>
                </Box>
             </Box>
         </Box>
         
     </Box>
  )
}

export default TransactionList