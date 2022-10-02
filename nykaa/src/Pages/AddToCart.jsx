import { Box, Center, Badge, Text, HStack, Image, Spacer, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import AddButton from "../Components/Button";
import data from '../db.json'
function AddToCart() {
    const { pId } = useParams();
    // console.log('pId: ', data.faceprimer[pId - 1]);
    const [obj, setObj] = useState({})

    useEffect(()=>{
        setObj(data.faceprimer[pId - 1])
    },[])
    
    console.log(obj);
    return (
        <Center>
            <HStack spacing='24px' gap={20}>
                <Box w='400px' h='400px'>
                    <Image boxSize='400px' objectFit='cover' src={obj.image} />
                </Box>
                <Box w='400px' h='400px'>
                    <VStack>
                        <Box textAlign={'center'}>
                            <Text >
                                {obj.name}
                            </Text>
                        </Box>
                        <Box >
                            <Badge>
                                MRP : {obj.price}
                            </Badge>
                        </Box>
                        <Box as='span' color='gray.600' fontSize='sm'>
                            <Badge>
                                Offer : {obj.off} %
                            </Badge>
                        </Box>
                        <Box display='flex' mt='2' alignItems='center'>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={i < obj.rating ? 'teal.500' : 'gray.300'}
                                    />
                                ))}
                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                reviews
                            </Box>
                        </Box>
                        <AddButton />
                    </VStack>
                </Box>
            </HStack>
        </Center>
    )
}
export default AddToCart;