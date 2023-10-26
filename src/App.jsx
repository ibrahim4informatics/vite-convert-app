// import { useState } from 'react';
import { Box, Image, Heading, Text, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { useState } from 'react';
import bg from './assets/bg.svg'
import { CheckIcon } from '@chakra-ui/icons'

function App() {
  const [values, setValues] = useState({ n: '', n1: '', n2: '', n3: '' })
  const changeHundler = (e) => {

    setValues({
      n: e.target.value,
      n1: Number.parseFloat(e.target.value).toString(2),
      n2: Number.parseFloat(e.target.value).toString(8),
      n3: Number.parseFloat(e.target.value).toString(16),
    })

  }
  return (
    <Box p={8} as='div' display={"flex"} alignItems={'center'} justifyContent={'center'} w='full' height={'100vh'} bgColor={'#2858e6'} >
      <Image src={bg} position={'absolute'} zIndex={0} />
      <Box
        w={'90%'} maxW={'420px'} borderRadius={8} bg={'rgba(255, 255, 255, 0.25)'} boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'} style={{ backdropFilter: 'blur(1.9px)' }}
        border={"1px solid rgba(255, 255, 255, 0.2)"} zIndex={1} display={'flex'} flexDirection={'column'} alignItems={'center'}
      >
        <Heading textAlign={'center'} color={'blackAlpha.500'}>Number Converter</Heading>
        <Text fontSize={10} fontWeight={'bold'} my={1} color={'blue.800'}>Made By Ibrahim Benyahia</Text>
        <Box my={'auto'} w={"90%"}>
          <InputGroup my={4}>
            <Input onChange={changeHundler} value={values.n} type='number' placeholder='Number in Base 2 appear here' colorScheme='blue' bg={'whiteAlpha.600'} />
            <InputRightElement ><Button><CheckIcon /></Button></InputRightElement>
          </InputGroup>
          <Input value={(values.n1.toString() === 'NaN' ? '/In Binary' : values.n1 + "/ In Binary")} readOnly my={4} placeholder='Number in Base 2 appear here' colorScheme='blue' bg={'whiteAlpha.600'} />
          <Input value={(values.n2.toString() === 'NaN' ? '/In Octal' : values.n2 + "/ In Octal")} readOnly my={4} placeholder='Number in Base 8 appear here' colorScheme='blue' bg={'whiteAlpha.600'} />
          <Input value={(values.n3.toString() === 'NaN' ? '/In Hexadecimale' : values.n3 + "/ In Hexadecimale")} readOnly my={4} placeholder='Number in Base 16 appear here' colorScheme='blue' bg={'whiteAlpha.600'} />
        </Box>

      </Box>
    </Box>
  )
}

export default App
