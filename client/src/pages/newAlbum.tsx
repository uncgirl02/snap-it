import DashboardNav from "../components/DashboardNav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


import {
    Flex,
    Heading,
    Box,
    Container,
    HStack,
    VStack,

} from '@chakra-ui/react';


const newAlbum = () => {
    return (
        <main>
            <DashboardNav />
            <div>
                <Flex>
                    <Sidebar children={undefined} />
                    <VStack>
                        
                        
                    </VStack>
                </Flex>
            </div>
            <Footer />
        </main>






    )
}

export default newAlbum;