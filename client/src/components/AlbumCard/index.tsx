import React, { useEffect, useState } from "react";
import Auth from "../../utils/auth";
import { QUERY_USER } from "../../utils/queries";
import { useNavigate } from "react-router-dom";

import { Flex, Box, Image, Badge, useColorModeValue } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

const info = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
};

export function AlbumCard(album: any) {
  const [photos, setPhotos] = useState(album.album.photos);
  const navigate = useNavigate();

  console.log("Hello album photo", album.album.photos);

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        _hover={{
          transform: "translateY(5px)",
          boxShadow: "dark-lg",
        }}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {info.isNew}

        {photos &&
          photos.length &&
          photos.map((photo: any, key: any) => (
            <div
              onClick={() => {
                navigate("/editalbum");
              }}
            >
              <Image
                src={photo}
                alt={`Picture of ${info.name}`}
                roundedTop="lg"
              />
            </div>
          ))}

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {info.isNew && (
              <Badge
                rounded="full"
                px="2"
                fontSize="0.8em"
                colorScheme="red"
              ></Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            >
              Test
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg"></Box>
              Category
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default AlbumCard;
