import Navbar from '../components/Navbar'
import AlbumCard from '../components/AlbumCard'
import Testimonials from '../components/Testimonials'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import ImageSlider from '../components/ImageSlider'
import images from '../assets/images'
import {
Flex,
Container,
Text,
HStack,
VStack,
Center,
Heading,
 } from '@chakra-ui/react';
import { graphqlSync } from 'graphql'


const Home = () => {
return ( 
    
    <main>
    <Navbar />
        <div>
        <Flex>
            <VStack>
            <div>
            <ImageSlider images={images}></ImageSlider>
            </div> 
            <Container maxW='container.xl' bg='blue.600' color='white' borderRadius='base'>
                <Heading className='top-album-heading' justifyContent={'center'}>Top Albums of the Week</Heading>
                    <HStack>
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                    </HStack>
            </Container>
            </VStack>
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