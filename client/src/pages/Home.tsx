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
import Hero from '../components/Hero'


export default function Home() {

    return (

        <main>
            <Navbar />
            <div>
                <Hero />


                <Box>
                    <Heading className='top-album-heading' justifyContent={'center'}>Top Albums of the Week</Heading>
                    <HStack>
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                    </HStack>
                </Box>

                <Container maxW='100%' centerContent>
                        <Heading fontSize={40}>Snap it. Share it. Done.</Heading>
                        <Text fontSize={30} fontWeight='bold'>How It Works</Text>
                        <HowItWorks />
                </Container>
            
                <Testimonials />
            </div>
            <Footer />
        </main>

    )
}

