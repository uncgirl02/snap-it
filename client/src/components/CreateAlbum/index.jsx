import {
  Box,
  Button, Center, Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack, Switch, useColorModeValue
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";


import { useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import SimpleFileUpload from "react-simple-file-upload";
import { ADD_ALBUM } from "../../utils/mutations";

import emailjs from "@emailjs/browser";

export function CreateAlbum() {
  const [file, setFile] = useState();
  const [uploadedImages, setUploadedImages] = useState([]);
  const navigate = useNavigate();

  const [invite, setInvite] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_5es8oey', 'template_jt004ma', form.current, 'Qipkbg_kQLx-Nrs3f')
      .then((result) => {
        console.log(result.text)
        ;
      }, (error) => {
        console.log(error.text);
      })
      .then()
  };

  function handleUpload(url) {
    console.log(url);
    setUploadedImages([...uploadedImages, url]);
  }

  const [albumName, setAlbumName] = useState("");
  const [isPublic, setIsPublic] = useState();
  const [friendEmail, setFriendEmail] = useState("");

  const [addAlbumMutation] = useMutation(ADD_ALBUM);
  const [isSending, setIsSending] = useState(false);

  const sendCreateAlbumRequest = () => {
    if (isSending) return;
    setIsSending(true);

    addAlbumMutation({
      variables: {
        albumName: albumName,
        isPublic: isPublic,
        photos: uploadedImages,
      },
    }).then((result) => {
      console.log("result", result.data);
      navigate("/dashboard");
    });

    setIsSending(false);
  };

  return (
    <Flex
      width={"full"}
      bg={useColorModeValue("gray.100", "gray.800")}
    >
      <Stack
        spacing={6}
        w="100%"
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
            onChange={(event) => setAlbumName(event.currentTarget.value)}
          />
        </FormControl>
        <Stack direction={["column", "row"]} spacing={6}>
          <Center></Center>
          {console.log(process.env, "env")}
          <SimpleFileUpload
            apiKey={process.env.API_KEY}
            preview="false"
            width="300"
            height="300"
            multiple="true"
            onSuccess={handleUpload}
          />
          {file && <p> Uploaded: {file}</p>}
        </Stack>

        <Stack direction={['column', 'row']} spacing='24px'>

          {uploadedImages.length ? (
            uploadedImages.map((image) => (
              <Box height="200" w="200px" mb={30}>
                <img src={image} alt="Album Photos" />
              </Box>
            ))
          ) : (
            <p>Upload up to 10 images and they will appear here!</p>
          )}
        </Stack>
        <FormControl>
          <FormLabel htmlFor="private" mb="0" mt={150}>
            Make Private?
          </FormLabel>
          <Switch
            id="private"
            defaultChecked={false}
            onChange={(event) => setIsPublic(event.currentTarget.checked)}
          />
        </FormControl>
        <form ref={form} onSubmit={sendEmail}>
          <FormControl>
            <FormLabel>Invite a Friend to View?</FormLabel>
            <Stack>
              <Input
                name="friend_name"
                maxW={"md"}
                placeholder="Friend's Name"
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
              <Input
                name="friend_email"
                maxW={"md"}
                placeholder="Friend's E-mail Address"
                _placeholder={{ color: "gray.500" }}
                type="e-mail"
                onChange={(event) => setFriendEmail(event.currentTarget.value)}
              />
              <Input
                name="user_name"
                maxW={"md"}
                placeholder="Your Name"
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
              <Input
                name="user_email"
                maxW={"md"}
                placeholder="Your E-mail Address"
                _placeholder={{ color: "gray.500" }}
                type="e-mail"
              />
              <Button
                maxW={"md"}
                placeholder="Send"
                _placeholder={{ color: "gray.500" }}
                bg="gray.300"
                type="submit"
                value="Send"
                onSubmit={sendEmail}
              >
                Send Invite
              </Button>
              {invite && <div>INVITE SENT!</div>}
            </Stack>
          </FormControl>
        </form>

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
            }}
            onClick={sendCreateAlbumRequest}
          >
            Create My Album
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default CreateAlbum;
