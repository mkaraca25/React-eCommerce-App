import React from 'react'
import {Box,Image,Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Card=({item}) =>{
    console.log(item);
  return (
    <Box  borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <Link to={`/product/${item.id}`}>
            <Image  height="200px" width="200px" src={item.thumbnail} alt='product' />
            <Box p="6">
                <Box d="plex" alignItems="baseline">
                    {item.title}
                </Box>
                <Box >
                    {item.price} $
                </Box>
            </Box>
        </Link>
        <Button colorScheme="pink">Add to basket</Button>
    </Box>
  )
}

export default Card