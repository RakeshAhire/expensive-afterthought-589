import Navbar from './Navbar';
import SingleDiv from './SingleDiv';
import SimpleSlider from './Slider';
import { Grid, Box, Image, Text } from '@chakra-ui/react'
import VariableWidth from './Slider2';
import AllProducts from './AllProducts';


function Home() {
  const firstGrid = [
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/4103ae09-66db-490e-a549-abaafa0fa050.jpg?tr=w-600,cm-pad_resize',
      offer: 'Upto 50% Off',
      range: 'On Entire Range'
    },
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/759062af-8ef8-40d8-804a-51765b9013e4.jpg?tr=w-600,cm-pad_resize'
      , offer: 'Upto 30% Off',
      range: 'On Entire Range'
    },
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/b7e2396a-56b6-448a-aa0a-fc622768120a.jpg?tr=w-600,cm-pad_resize',
      offer: 'Upto 20% Off',
      range: '+ Exciting Gifts On Purchase!'
    }
    ,
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/6e497311-b843-40bc-9843-55afbaff9b5f.jpg?tr=w-600,cm-pad_resize',
      offer: 'Affordable Skincare Backed By Science',
      range: 'Shop Bestsellers Starting At Rs.500'
    },
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/810bcb4c-3eff-440a-b1bf-8320983045a4.jpg?tr=w-600,cm-pad_resize',
      offer: 'Upto 50% Off + Free Mini Lipstick',
      range: 'Worth Rs. 249 On Rs. 800'
    },
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/4103ae09-66db-490e-a549-abaafa0fa050.jpg?tr=w-600,cm-pad_resize',
      offer: 'Buy 2 Get Flat 15% Off!',
      range: 'On Entire Range'
    },
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/de569249-9a36-48d0-b5cf-fd5f3c69b390.jpg?tr=w-600,cm-pad_resize',
      offer: 'Upto 40% Off',
      range: 'Erase Dark Circles Instantly!'
    }
    ,
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/2fb9a802-f82c-4e0b-a132-aa0f3535a705.jpg?tr=w-600,cm-pad_resize',
      offer: 'Upto 20% Off',
      range: '+ Exciting Gifts On Purchase!'
    }
  ]
  const secondGrid = [
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/48b0e7b8-bff9-44ad-b458-670455d3ee00.jpg?tr=w-600,cm-pad_resize',
      offer: 'Upto 30% Off + Free Sleeping Mask',
      range: 'Worth Rs.175 On Rs.700'
    },
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/33ca48ba-613a-43e8-bec9-88cf09282e80.jpg?tr=w-600,cm-pad_resize'
      , offer: 'Get Exciting Gifts On Purchase!',
      range: 'Of International Bestsellers'
    },
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/8b792d21-c756-40ec-864c-236cf1cc3415.jpg?tr=w-600,cm-pad_resize',
      offer: 'Upto 35% Off',
      range: 'Say Goodbye To Skin Tress!'
    }
    ,
    {
      backgroundImage: 'https://images-static.nykaa.com/uploads/e508f06c-a92f-4dd7-be64-040f15222614.jpg?tr=w-600,cm-pad_resize',
      offer: 'Upto 35% Off + Free Sleeping Mask',
      range: 'Worth Rs.175 On Rs.700'
    }]
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <VariableWidth />
      <Box m={'auto'}>
        <Image m={'auto'} w='70%' src='https://images-static.nykaa.com/uploads/2f371d7d-235a-4be5-b852-a5ddf4cd84ea.jpg?tr=w-1200,cm-pad_resize' alt='Dan Abramov' />
      </Box>
      <Grid templateColumns='repeat(2, 1fr)' gap={'50px'} w='70%' m={'auto'} mt={20} mb={20}>
        {firstGrid.map((e) => (<SingleDiv backgroundImage={e.backgroundImage} offer={e.offer} range={e.range} />)
        )
        }
      </Grid>
      <Text fontSize='3xl' textAlign={'center'} >Only At Nykaa</Text>
      <Grid templateColumns='repeat(2, 1fr)' gap={'50px'} w='70%' m={'auto'} mt={20} mb={20}>
        {secondGrid.map((e) => (<SingleDiv backgroundImage={e.backgroundImage} offer={e.offer} range={e.range} />)
        )
        }
      </Grid>
      <AllProducts/>
    </div>
  )
}
export default Home;