import {
    Menu, Text, MenuButton, Button, MenuList,
    MenuOptionGroup, MenuItemOption, MenuDivider, VStack, Box, Container
} from '@chakra-ui/react'


function Sorting({handleChange}) {
    const breakpoints = {
        sm: '100px',
        md: '120px',
        lg: '240px',
        xl: '240px',
      }
    return (
        <Container pos='relative' bottom='0'  >
            <Menu>
                <Box >
                    <MenuButton w={breakpoints} as={Button} border={'1px solid black'} bgColor='white' p={'5  8'} >
                       <Text fontSize={{sm:'10px', md:'10px', lg:'16px'}}> Sort By Price </Text>
                    </MenuButton>
                    <MenuList minWidth='240px'>
                        <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
                            <MenuItemOption onClick={()=>handleChange('asc')} value='asc'>Low To High</MenuItemOption>
                            <MenuItemOption onClick={()=>handleChange('desc')} value='desc'>High To Low</MenuItemOption>
                        </MenuOptionGroup>
                    </MenuList>
                </Box>
            </Menu>
        </Container>

    )
}
export default Sorting;