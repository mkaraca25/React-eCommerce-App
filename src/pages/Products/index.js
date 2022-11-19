import React from 'react'
import Card from '../../components/Card'
import { Grid} from '@chakra-ui/react'
import {useQuery} from 'react-query'


function Products() {
  const fetchProductList = async () => {
		const res = await fetch('https://dummyjson.com/products');
		return res.json();
	};

  const {data, error, isLoading} = useQuery('products', fetchProductList);
  if (error) return "An error has occurred"+error.message;
	if (isLoading) return "Loading...";
  return (
    <div>
        <Grid templateColumns='repeat(3, 1fr)' gap={4}>
          {data.products.map((item,key) => ( 
            <Card key={key} item={item}/>))}
        </Grid>
    </div>
  )
}

export default Products