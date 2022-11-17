import React from 'react'
import {Box,Image,Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function Card() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <Link to="#/">
            <Image src='https://picsum.photos/200' alt='product'/>
            <Box p="6">
                <Box d="plex" alignItems="baseline">
                    18/11/2022
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    Mac Pro
                </Box>
                <Box >
                    1500 TL
                </Box>
            </Box>
        </Link>
        <Button colorScheme="pink">Add to basket</Button>
    </Box>
  )
}

export default Card