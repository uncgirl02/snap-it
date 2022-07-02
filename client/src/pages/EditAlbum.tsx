import DashboardNav from "../components/DashboardNav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import { FiUpload } from "react-icons/fi";


import {
    Flex,
    Button,
    Container,
    Heading,
    VStack,
    SimpleGrid,
    Image,
} from '@chakra-ui/react';



const EditAlbum = () => {
    return (
        <main>
            <DashboardNav />
            <div>
                <Flex >
                    <Sidebar children={undefined} />
                    <VStack display='flex' alignItems='center'>
                    <Container >
                        <Heading mt={5}>Album Title</Heading>
                    </Container>
                    <Button leftIcon={<FiUpload />} w="full">Add Images</Button>
                    <SimpleGrid minChildWidth='120px' spacing='40px'>
                        <Image  height='100px'></Image>

                    </SimpleGrid>
                    </VStack>
                </Flex>
            </div>
            <Footer />
        </main>
    )
}

export default EditAlbum;