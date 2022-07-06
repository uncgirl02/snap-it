import React, { useEffect, useState } from "react";
import DashboardNav from "../components/DashboardNav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AlbumCard from "../components/AlbumCard";


import { QUERY_USER, GET_ALBUMS } from "../utils/queries";
import Auth from "../utils/auth";


import { Flex, Heading, Container, HStack, VStack } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

const Dashboard = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [username, setUsername] = useState();
  const [photos, setPhotos] = useState([]);
  const [albums, setALbums] = useState([]);

  useEffect(() => {
    const user = Auth.getUser();
    console.log("username", user);
    setUsername(user);
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, error, data } = useQuery(GET_ALBUMS, {
    variables: { username: username ? username : "" },
  });
  console.log("User Photos", data?.albums[0].albumName);

  useEffect(() => {
    setPhotos(data?.albums[0]?.photos);
    setALbums(data?.albums);
  });

  return (
    <main>
      <DashboardNav />
      <div>
        <Flex>
          <Sidebar children={undefined} />
          <VStack>
            <Container
              maxW="fit-content"
              bg="blue.600"
              color="white"
              borderRadius="base"
            >
              <Heading className="top-album-heading" justifyContent={"center"}>
                Favorite Albums
              </Heading>
              <HStack>
                    {albums &&
                  albums.length &&
                  albums.map((album: any, key: any) => (
                    <AlbumCard album={album}  />
                  ))}
              </HStack>
            </Container>
            <Container
              maxW="fir-content"
              bg="blue.600"
              color="white"
              borderRadius="base"
            >
              <Heading className="top-album-heading" justifyContent={"center"}>
                Friends Albums
              </Heading>
              <HStack>
              </HStack>
            </Container>
          </VStack>
        </Flex>
      </div>
      <Footer />
    </main>
  );
};




export default Dashboard

