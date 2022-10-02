import SingleProduct from "./SingleProduct";
import {Grid} from '@chakra-ui/react';
function AllProducts({data}){
   
    return (
        <div>
            <Grid w='80%' m={'auto'} templateColumns='repeat(3, 1fr)' gap={6}>
            { data.map((e)=>(
                <SingleProduct 
                key={e.id}
                id={e.id}
                category={e.category}
                feautured={e.feautured}
                bestSeller={e.bestSeller}
                image={e.image}
                name={e.name}
                offer={e.offer}
                mrp={e.mrp}
                price={e.price}
                off={e.off}
                rating={e.rating}
                 />
            ))
        }
            </Grid>
        </div>
        
    )
}
export default AllProducts;


