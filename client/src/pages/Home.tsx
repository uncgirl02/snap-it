import Navbar from '../components/Navbar'
import AlbumCard from '../components/AlbumCard'
import Testimonials from '../components/Testimonials'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import {
Flex,
Container,
Text,
HStack,
Center,
Heading,
 } from '@chakra-ui/react';


const Home = () => {
return ( 
    
    <main>
    <Navbar />
        <div>
        <Flex>
            <Container maxW='' bg='blue.600' color='white' borderRadius='base'>
                <Heading className='top-album-heading'>Top Albums of the Week</Heading>
                    <HStack>
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                    </HStack>
            </Container>
        </Flex>
        <Container>
            <Heading>Snap it. Share it. Done.</Heading>
            <Text>How it Works.</Text>
            <HowItWorks />
        </Container>
        <Testimonials />
        </div> 
    <Footer />
    </main>
    
)
}

export default Home;