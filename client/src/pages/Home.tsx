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
Box,
 } from '@chakra-ui/react';
import { graphqlSync } from 'graphql'


const Home = () => {
return ( 
    
    <main>
    <Navbar />
        <div>
            <Flex>
              
                <Container maxW='100%' bg='blue.600' color='white' borderRadius='base' p={10} ms={5} me={10}>
                    <ImageSlider images={images}></ImageSlider>  
                </Container>

            </Flex>

            <Box>
                <Heading className='top-album-heading' justifyContent={'center'}>Top Albums of the Week</Heading>
                    <HStack>
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                    </HStack>
            </Box>
               
      
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