import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, Badge, Text, Container, VStack } from "@chakra-ui/react"
import AddButton from "./Button";


function SingleProduct({
    id,
    category,
    feautured,
    bestSeller,
    image,
    name,
    offer,
    mrp,
    price,
    off,
    rating
}) {

    return (
        <Box p={5} pb={20} key={id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <VStack position='relative'>
            <Image boxSize='150px'
                objectFit='cover' src={image} alt={name} />
            <Box textAlign={'center'}>
                <Text >
                    {name}
                </Text>
            </Box>
            <Box >
                <Badge>
                    MRP : {price}
                </Badge>
            </Box>
            <Box as='span' color='gray.600' fontSize='sm'>
                <Badge>
                    Offer : {off} %
                </Badge>
            </Box>
            <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                    .fill('')
                    .map((_, i) => (
                        <StarIcon
                            key={i}
                            color={i < rating ? 'teal.500' : 'gray.300'}
                        />
                    ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    reviews
                </Box>
            </Box>
            <AddButton pId={id} /> 
            </VStack>
        </Box>
    )
}
export default SingleProduct;