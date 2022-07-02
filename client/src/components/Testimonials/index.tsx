import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export function Testimonials() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Why Use Snap It?</Heading>
          <Text>See what our users have to say about us!</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Easy to Use</TestimonialHeading>
              <TestimonialText>
                Snap it! has been a wonderful way to send pictures to grandparents who aren't on social media.  It's so easy for them to login and see the pictures I've taken of the kids.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'Stay at Home Mom'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
                The design of this app is so simple and intuitive! Everything is so easy to navigate and all the features are so easy to use!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://www.wgtn.ac.nz/__data/assets/image/0011/1738352/samuel-clack.jpg'
              }
              name={'Mark Rightsell'}
              title={'Software Developer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Privacy is a Priority</TestimonialHeading>
              <TestimonialText>
                I've used Snap It! as a way to share photos of my classroom activities with the parents of the children in my class.  The privacy of this app allows me to make sure only the intended recipients recieve and view the pictures of the children.  The parents love it!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://c.stocksy.com/a/KEO500/z9/1284784.jpg'
              }
              name={'Felicia Smith'}
              title={'Teacher'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
export default Testimonials;