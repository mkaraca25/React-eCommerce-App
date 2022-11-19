import React from 'react'
import {Box,Button,Text} from '@chakra-ui/react'
import {useParams } from 'react-router-dom'
import {useQuery} from 'react-query'
import ImageGallery from 'react-image-gallery';

const ProductDetail=() =>{
    const fetchProduct = async (id) => {
		const res = await fetch(`${process.env.REACT_APP_BASE_ENDPOINT}/products/${id}`);
		return res.json();
	};
    
    const {product_id}=useParams();
    const {data,isLoading,isError} = useQuery(["product",product_id],()=>fetchProduct(product_id))
    if (isError) return <div>"An error has occurred"</div>
	if (isLoading) return <div>"Loading..."</div>;
    const images=data.images.map((url)=>({original: url}))
  return (
    <div>
        <Button colorScheme="pink">Add to basket</Button>
        <Text  as="h2" fontSize="2xl">
            {data.title}
        </Text>
        <p>{data.description}</p>
        <Box margin="10"  >
            <ImageGallery  items={images}/>
        </Box>
    </div>
  )
}

export default ProductDetail