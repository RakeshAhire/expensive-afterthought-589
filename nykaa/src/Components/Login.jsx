import { Container, Heading, Text, Image, CloseButton, Button,Input } from '@chakra-ui/react';
import image from '../Images/Login.png'

import { Link } from 'react-router-dom';
function Login() {
    return (
        <Container maxW='sm' mt={20}>
            
            <Link to='/'> <CloseButton /></Link>
            <Heading >Sing In</Heading>
            <Text fontSize='xl'>To quickly find your favourites items, saved addresses and payments.</Text>
            <Text fontSize='xl'>Register and earn 2000 reward points</Text>
            <Image src={image} alt='loginPage' />
            <Input h={12} mt={8} placeholder='Mobile Number' variant='unstyled' bg='pink'color='white' />
            <Button w='full' mt={8} colorScheme='teal' variant='outline' spinnerPlacement='start' > Google </Button>
            <Text fontSize='xl' mt={6}>By continuing, you agree that you have read and accept our T&Cs and Privacy Policy.</Text>
        </Container>
    )
}
export default Login;