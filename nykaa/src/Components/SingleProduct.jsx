import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, Badge,Text } from "@chakra-ui/react"


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
}){ 
    // const property = {
    //     id: 1,
    //     category: "face-primer",
    //     feautured: false,
    //     bestSeller: true,
    //     image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/l/a/lakm_-absolute-blur-perfect-makeup-primer.jpg",
    //     name: "Lakme Absolute Blur Perfect Makeup Primer",
    //     offer: "Extra 10% Off",
    //     mrp: 750,
    //     price: 503,
    //     off: 33,
    //     rating: 4,
    // }

    return (
        <Box key={id} m={'auto'} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image w='250px' h='300px'  src={image} alt={name} />
            <Box w='50px'  >
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
                            color={i <rating ? 'teal.500' : 'gray.300'}
                        />
                    ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                     reviews
                </Box>
            </Box>
        </Box>
    )
}
export default SingleProduct;