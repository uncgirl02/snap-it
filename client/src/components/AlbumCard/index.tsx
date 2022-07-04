import React from 'react'

import {
    Flex,
    Box,
    Image,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';

  
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
  };
  
  export function AlbumCard() {
    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          _hover={{
            transform: 'translateY(5px)',
            boxShadow: 'dark-lg',
          }}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew}
  
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
  
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  Top Album
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                >
                {data.name}
              </Box>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                </Box>
                Album Name
                {/* {data.price.toFixed(2)} */}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default AlbumCard;