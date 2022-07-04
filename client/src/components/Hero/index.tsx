import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
    Container,
  } from '@chakra-ui/react';

  import bgPhoto from '../../assets/photo-collage.jpg'
  import ImageSlider from '../ImageSlider'
  import images from '../../assets/images'
  
  export function Hero() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={bgPhoto}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.800, transparent)'}>
          <Stack maxW={'6xl'} align={'flex-start'} spacing={10} direction='row' >
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>
              Privately share your photos with friends and family.
            </Text>
            <Container maxW='50%' bg='white' color='white' borderRadius='base' p={10} ms={5} me={10}>
                    <ImageSlider images={images}></ImageSlider>  
            </Container>
            
          </Stack>
        </VStack>
      </Flex>
    );
  }

  export default Hero;