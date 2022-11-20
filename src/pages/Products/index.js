import React from 'react'
import Card from '../../components/Card'
import { Box,Button, Flex, Grid } from '@chakra-ui/react'
import { useInfiniteQuery } from 'react-query'
import styles from '../../components/Navbar/styles.module.css'

function Products() {
  const fetchProductList = async ({ pageParam = 0 }) => {
    const res = await fetch(`${process.env.REACT_APP_BASE_ENDPOINT}/products`);
    return res.json();
  };
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status
  } = useInfiniteQuery('products', fetchProductList, {
    getNextPageParam: (lastGroup, allGroup) => {
      const morePagesExist = lastGroup?.length === 30;
      if (!morePagesExist) {
        return
      }
      return allGroup.length + 1;
    },
  });
  if (status === "error") return "An error has occurred" + error.message;
  if (status === "loading") return <Flex mt={275} justifyContent="center"> <Button isLoading colorScheme='teal' 
  loadingText='Loading' variant='solid'>
</Button></Flex>
  return (
    <div className={styles.Products}>
      <Grid templateColumns='repeat(4, 1fr)' gap={4}>
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {
              group.products.map((item) => {
                return <Box w="100%" key={item.id}>
                  <Card item={item} />
                </Box>

              })
            }
          </React.Fragment>
        ))}
      </Grid>
      <Flex mt="10 " justifyContent="center">
        <Button onClick={() => fetchNextPage()}
        isLoading={isFetchingNextPage}
          disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load more" : "Nothing more to load"}
        </Button>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </Flex>
    </div>
  )
}
export default Products