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
    Wrap,
    WrapItem,

} from '@chakra-ui/react';


const Dashboard = () => {

    
    return (
        <main>
            <DashboardNav />
            <div>
                <Flex>
                    <Sidebar children={undefined} />
                    
                        <Container maxW='fit-content' bg='blue.600' color='white' borderRadius='base'>
                            <Heading className='top-album-heading' justifyContent={'center'}>My Albums</Heading>
                            <Flex direction ='row'>
                                <Wrap>
                                    <WrapItem>
                                        <AlbumCard />
                                    </WrapItem>
                                </Wrap>
                            </Flex>
                        </Container>
        
                </Flex>
            </div>
            <Footer />
        </main>






    )
}

export default Dashboard