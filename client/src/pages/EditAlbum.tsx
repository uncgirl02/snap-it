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
                   
                    <Container maxW='100%' centerContent>
                        <Heading mt={5}>Album Title</Heading>
                    </Container>
                    
                    <SimpleGrid minChildWidth='120px' spacing='40px'>
                        <Image  height='100px'></Image>

                    </SimpleGrid>
                   
                </Flex>
            </div>
            <Footer />
        </main>
    )
}

export default EditAlbum;