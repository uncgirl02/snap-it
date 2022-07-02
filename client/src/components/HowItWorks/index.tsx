import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';


export function HowItWorks() {
  return (

    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Upload You Pictures
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Invite Your Friends and Family
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default HowItWorks;
