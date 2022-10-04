
import { Box, Container, Flex } from '@chakra-ui/react';
import AllProducts from '../Components/AllProducts';
import Sorting from '../Components/Sorting';
import data from '../db.json'
import { useEffect, useState } from "react";
import SimpleSlider from '../Components/Slider';

const slideData = [
    { image: "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize" },

    { image: "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize" }
  ]
  
function Face() {

    const [myData, setmyData] = useState([]);

    useEffect(() => {
        setmyData(data.faceprimer)
    }, [])

    const handleChange = (val) => {
        // console.log(val);
        let Change;
        if (val === 'asc') {
            Change = myData.sort((a, b) => (
                a.price - b.price
            ));
        }
        else if (val === 'desc') {
            Change = myData.sort((a, b) => (
                b.price - a.price
            ));
        }
        setmyData([...Change]);
    }


    return (
        <>
        <SimpleSlider slideData={slideData} />
            <Container maxW='container.2xl' mt={10}>
                <Flex w='full' gap='20px' >
                    <Box w='20%' pl='7%' >
                        <Sorting handleChange={handleChange} />
                    </Box>
                    <Box w='80%' >
                        <AllProducts data={myData} />
                    </Box>
                </Flex>
            </Container>
        </>
    )
}
export default Face;