import {
    Menu, Select, MenuButton, Button, MenuList,
    MenuOptionGroup, MenuItemOption, MenuDivider, VStack, Box, Container
} from '@chakra-ui/react'


function Sorting({handleChange}) {

    return (
        <Container pos='relative' bottom='0'  >
            <Menu>
                <Box >
                    <MenuButton   w='240px' as={Button} border={'1px solid black'} bgColor='white' p={'5  8'} >
                        Sort By Price
                    </MenuButton>
                    <MenuList minWidth='240px'>
                        <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
                            <MenuItemOption onClick={()=>handleChange('asc')} value='asc'>Ascending</MenuItemOption>
                            <MenuItemOption onClick={()=>handleChange('desc')} value='desc'>Descending</MenuItemOption>
                        </MenuOptionGroup>
                    </MenuList>
                </Box>
            </Menu>
        </Container>

    )
}
export default Sorting;