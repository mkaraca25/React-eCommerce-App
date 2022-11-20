import React from 'react'
import {useFormik} from 'formik'
import validationSchema from './validations'
import { Box,Flex,Heading,FormControl,FormLabel, Input, Button } from '@chakra-ui/react'
function Signup() {
  const formik=useFormik({
    initialValues:{
      email:"",
      password:"",
      passwordConfirm:"",
    },
    validationSchema,
    onSubmit: async(values,bag)=>{
      alert(values.email+" "+values.password);
      
    }
  })
  return (
    <div >
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input onChange={formik.handleChange} onBlur={formik.onBlur}
                value={formik.values.email}
                  name="email" type="email"
                />
              </FormControl>
              <FormControl mt={5}>
                <FormLabel>Password</FormLabel>
                <Input onChange={formik.handleChange} onBlur={formik.onBlur}
                value={formik.values.password}
                  name="password" type="password"
                />
              </FormControl>
              <FormControl mt={5}>
                <FormLabel>Password Confirm</FormLabel>
                <Input onChange={formik.handleChange} onBlur={formik.onBlur}
                value={formik.values.passwordConfirm}
                  name="passwordConfirm" type="password"
                />
              </FormControl>
              <Button mt={5} width="full" type='submit'>
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signup