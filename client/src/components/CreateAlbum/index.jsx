import {
  Box,
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
  Grid,
  GridItem,
  SimpleGrid,
  Container,
  List,
  ListItem
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import SimpleFileUpload, {
  SimpleFileUploadProvider,
} from "react-simple-file-upload";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

export function CreateAlbum() {
  const [file, setFile] = useState();
  const [uploadedImages, setUploadedImages] = useState([])

  function handleUpload(url) {
    console.log(url)
    setUploadedImages([...uploadedImages, url])
  }

  return (
    <Flex
      // minH={'100vh'}
      // align={'center'}
      // justify={'center'}
      width={"full"}
      bg={useColorModeValue("gray.100", "gray.800")}
    >
      <Stack
        spacing={6}
        w="100%"
        //   maxW={'md'}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Create New Album
        </Heading>
        <FormControl id="userName" isRequired>
          <FormLabel>Album Name</FormLabel>
          <Input
            maxW={"md"}
            placeholder="Album Name"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>
        <Stack direction={["column", "row"]} spacing={6}>
          <Center></Center>
          <SimpleFileUpload
            apiKey = "d479605eda75f2a5f3b0db1676d16b26"
            // apiKey = {process.env.HEROKU_KEY}
            preview="true"
            width="300"
            height="300"
            onSuccess={handleUpload}
          />
          {file && <p> Uploaded: {file}</p>}
        </Stack>
          <Center maxW={"md"}>
            <Button leftIcon={<FiUpload />} w="full">
              Upload Images
            </Button>
          </Center>
        {/* <SimpleGrid>
          <List>
            {uploadedImages.length ? (
              uploadedImages.map((image)=>(
                <ListItem h={200} w={200} mb={10}>
                  <img src={image} alt="Album Photos"/>
                </ListItem>
              ))
            ) : (
              <p>Your uploaded images will appear here!</p>
            )}
          </List>
        </SimpleGrid> */}
        <Stack direction={['column', 'row']} spacing='24px'>
        {uploadedImages.length ? (
              uploadedImages.map((image)=>(
                <Box height='200' w='200px' mb={30}>
                  <img src={image} alt="Album Photos"/>
                </Box>
              ))
            ) : (
              <p>Your uploaded images will appear here!</p>
            )}
        </Stack>
        <FormControl>
          <FormLabel htmlFor="private" mb="0" mt={150}>
            Make Private?
          </FormLabel>
          <Switch id="private" />
        </FormControl>
        <FormControl>
          <FormLabel>Invite a Friend to View?</FormLabel>
          <Input
            maxW={"md"}
            placeholder="Friend's E-mail Address"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>

        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="fit-content"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="fit-content"
            _hover={{
              bg: "blue.500",
            }}>
            Create My Album
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default CreateAlbum;
