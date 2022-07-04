import DashboardNav from "../components/DashboardNav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AlbumCard from "../components/AlbumCard";

import {
    Flex,
    Heading,
    Container,
    HStack,
    VStack,

} from '@chakra-ui/react';


const Dashboard = () => {
    return (
        <main>
            <DashboardNav />
            <div>
                <Flex>
                    <Sidebar children={undefined} />
                    <VStack>
                        <Container maxW='fit-content' bg='blue.600' color='white' borderRadius='base'>
                            <Heading className='top-album-heading' justifyContent={'center'}>Favorite Albums</Heading>
                            <HStack>
                                <AlbumCard />
                                <AlbumCard />
                                <AlbumCard />
                                <AlbumCard />
                            </HStack>
                        </Container>
                        <Container maxW='fir-content' bg='blue.600' color='white' borderRadius='base'>
                            <Heading className='top-album-heading' justifyContent={'center'}>Friends Albums</Heading>
                            <HStack>
                                <AlbumCard />
                                <AlbumCard />
                                <AlbumCard />
                                <AlbumCard />
                            </HStack>
                        </Container>
                    </VStack>
                </Flex>
            </div>
            <Footer />
        </main>






    )
}

export default Dashboard