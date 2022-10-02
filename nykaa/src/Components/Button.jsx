import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function AddButton({pId}) {
    return (
        <Button bgColor='#fc2779' size='md' w='150px' position='absolute' top='300'>
           <Link to={`/faceprimer/${pId}`}> Add to Bag </Link>
        </Button>
    )
}
export default AddButton;