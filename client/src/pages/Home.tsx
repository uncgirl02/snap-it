import {
    Box, Container, Flex, Heading, HStack, Text
} from '@chakra-ui/react'
import AlbumCard from '../components/AlbumCard'
import Footer from '../components/Footer'
import HowItWorks from '../components/HowItWorks'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Hero from '../components/Hero'


export default function Home() {

    return (

        <main>
            <Navbar />
            <div>
                <Hero />


                <Container maxW='100%' centerContent bg={'gray.100'}>
                    
                    <HStack justifyContent={'center'}>
                        {/* <AlbumCard />
                        <AlbumCard />
                        <AlbumCard />
                        <AlbumCard /> */}
                    </HStack>
                </Container>

                <Container maxW='100%' centerContent>
                        <Heading pt={5} fontSize={40}>Snap it. Share it. Done.</Heading>
                        <Text fontSize={30} fontWeight='bold'>How It Works</Text>
                        <HowItWorks />
                </Container>
            
                <Testimonials />
            </div>
            <Footer />
        </main>

    )
}

