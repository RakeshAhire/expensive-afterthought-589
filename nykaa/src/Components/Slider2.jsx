
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Box } from "@chakra-ui/react";


export default class VariableWidth extends Component {
    render() {
        const settings = {
            className: "slider variable-width",
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        };
        return (
            <div style={{ height:'300px',width: '90%',margin:'auto',marginTop:'30px' }}>
                    <Slider {...settings} style={{height:'250px'}} >
                        <div >
                                <img height='100%' src='https://images-static.nykaa.com/uploads/1fbca9b2-90a5-412d-bccd-122ab840b956.png?tr=w-1200,cm-pad_resize' alt='Dan Abramov' />
                        </div>
                        <div >
                                <img height='100%'  src='https://images-static.nykaa.com/uploads/1522381f-7b6e-4165-9fe4-393bafdcf7ea.jpg?tr=w-1200,cm-pad_resize' alt='Dan Abramov' />
                        </div>
                    </Slider>
               
            </div>
        );
    }
}