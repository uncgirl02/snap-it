import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Center,
    Switch,
  } from '@chakra-ui/react';
  import {
    FiUpload
  } from 'react-icons/fi';
  
  export function CreateAlbum() {
    return (
      <Flex
        // minH={'100vh'}
        // align={'center'}
        // justify={'center'}
        width={'full'}
        bg={useColorModeValue('gray.100', 'gray.800')}>
        <Stack
          spacing={6}
          w='100%'
        //   maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Create New Album
          </Heading>
          <FormControl id="userName" isRequired>
          <FormLabel>Album Name</FormLabel>
            <Input
              maxW={'md'}
              placeholder="Album Name"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
            </FormControl>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
              </Center>
              <Center maxW={'md'}>
                <Button leftIcon={<FiUpload />} w="full">Upload Images</Button>
              </Center>
            </Stack>
            <FormControl>
            <FormLabel htmlFor='private' mb='0'>
            Make Private?
            </FormLabel>
            <Switch id='private' />
            </FormControl>
            <FormControl>
            <FormLabel>Invite a Friend to View?</FormLabel>
            <Input
              maxW={'md'}
              placeholder="Friend's E-mail Address"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>

          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              as='a'
              href='/dashboard'
              bg={'red.400'}
              color={'white'}
              w="fit-content"
              _hover={{
                bg: 'red.500',
              }}>
              Cancel
            </Button>
            <Button
              bg={'blue.400'}
              color={'white'}
              w="fit-content"
              _hover={{
                bg: 'blue.500',
              }}>
              Create My Album
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }

  export default CreateAlbum;