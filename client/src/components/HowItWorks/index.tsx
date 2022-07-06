import { ReactElement } from 'react';
import { Container, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcGallery, FcConferenceCall, FcCameraIdentification } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={52}
        h={52}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.200'}
        mb={1}>
        {icon}
      </Flex>
      <Text align={'center'} fontSize={24} fontWeight={600}>{title}</Text>
      <Text align={'center'} fontSize={18} color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export function HowItWorks() {
  return (
    <Container p={4} maxW='container.lg' centerContent>
      <SimpleGrid minChildWidth='200px' spacing={20}>
        <Feature
          icon={<Icon as={FcGallery} w={20} h={20} />}
          title={'Upload Your Pictures'}
          text={
            'Easily create albums and upload your pictures with a simple click of a button.'
          }
        />
        <Feature
          icon={<Icon as={FcConferenceCall} w={20} h={20} />}
          title={'Invite Your Friends and Family'}
          text={
            'Enter in the e-mail addresses of the friends and family members you would like to view your album.'
          }
        />
        <Feature
          icon={<Icon as={FcCameraIdentification} w={20} h={20} />}
          title={'Instant Private Picture Access'}
          text={
            "Your friends and family will have instant, private access to the albums you've invited them to view.  All they need is an account of their own!"
          }
        />
      </SimpleGrid>
    </Container>
  );
}

export default HowItWorks;