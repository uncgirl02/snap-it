import {
    Box, Container, Flex, Heading, HStack, Text
} from '@chakra-ui/react'
import images from '../assets/images'
import AlbumCard from '../components/AlbumCard'
import Footer from '../components/Footer'
import HowItWorks from '../components/HowItWorks'
import ImageSlider from '../components/ImageSlider'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'


export default function Home ()  {

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
               
      
        <Container w='100%'>
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

