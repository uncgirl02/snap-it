import React from 'react';
import logo from '../../assets/camera.png'

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    HStack,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Checkbox,

} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';



export function Navbar() {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();


    
    // function openModal() {
        // const { isOpen, onOpen, onClose } = useDisclosure()
        
    //     return (
    
    //         <Modal isOpen={isOpen} onClose={onClose}>
    //             <ModalOverlay>
    //                 <ModalContent>
    //                     <Flex
    //                         minH={'100vh'}
    //                         align={'center'}
    //                         justify={'center'}
    //                         bg={useColorModeValue('gray.50', 'gray.800')}>
    //                         <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    //                             <Stack align={'center'}>
    //                                 <Heading fontSize={'4xl'}>Sign in to your account</Heading>
    //                                 <Text fontSize={'lg'} color={'gray.600'}>
    //                                     to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
    //                                 </Text>
    //                             </Stack>
    //                             <Box
    //                                 rounded={'lg'}
    //                                 bg={useColorModeValue('white', 'gray.700')}
    //                                 boxShadow={'lg'}
    //                                 p={8}>
    //                                 <Stack spacing={4}>
    //                                     <FormControl id="email">
    //                                         <FormLabel>Email address</FormLabel>
    //                                         <Input type="email" />
    //                                     </FormControl>
    //                                     <FormControl id="password">
    //                                         <FormLabel>Password</FormLabel>
    //                                         <Input type="password" />
    //                                     </FormControl>
    //                                     <Stack spacing={10}>
    //                                         <Stack
    //                                             direction={{ base: 'column', sm: 'row' }}
    //                                             align={'start'}
    //                                             justify={'space-between'}>
    //                                             <Checkbox>Remember me</Checkbox>
    //                                             <Link color={'blue.400'}>Forgot password?</Link>
    //                                         </Stack>
    //                                         <Button
    //                                             bg={'blue.400'}
    //                                             color={'white'}
    //                                             _hover={{
    //                                                 bg: 'blue.500',
    //                                             }}>
    //                                             Sign in
    //                                         </Button>
    //                                     </Stack>
    //                                 </Stack>
    //                             </Box>
    //                         </Stack>
    //                     </Flex>
    //                 </ModalContent>
    //             </ModalOverlay>
    //         </Modal>
    
    //     )
    // }

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <HStack>
                        <Image src={logo} boxSize='100px' objectFit='cover'></Image>
                        <Heading
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            fontFamily={'Helvetica, sans-serif;'}
                            fontSize='6xl'
                            color={useColorModeValue('gray.800', 'white')}>
                            Snap It!
                        </Heading>
                    </HStack>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        {/* <DesktopNav /> */}
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        as={'a'}
                        fontSize={'lg'}
                        fontWeight={400}
                        variant={'link'}
                        href={'#'}>
                        Sign In
                    </Button>
                    <Button
                        // onClick={openModal}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'lg'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        _hover={{
                            bg: 'pink.300',
                        }}>
                        Sign Up
                    </Button>
                </Stack>
            </Flex>



        </Box >
    )
}

export default Navbar;
