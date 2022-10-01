import SingleProduct from "./SingleProduct";
import data from '../db.json'
import { useEffect, useState } from "react";
import {Grid} from '@chakra-ui/react';
function AllProducts(){
    const [myData,setmyData]=useState([]);

    useEffect(()=>{
        setmyData(data.faceprimer)
    },[])
    // console.log('data: ', data.eyes);
    return (
        <div>
            <div>
            
            </div>
            <Grid w='80%' m={'auto'} templateColumns='repeat(4, 1fr)' gap={6}>
            { myData.map((e)=>(
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


    // id
    // category
    // feautured
    // bestSeller
    // image
    // name
    // offer
    // mrp
    // price
    // off
    // rating
