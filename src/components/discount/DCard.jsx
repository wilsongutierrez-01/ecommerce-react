import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from './Ddata'
import "../newArrivals/style.css"

const DCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        
            <Slider key="slider" {...settings}>
                {Ddata.map((value,index) => {
                    return(
                        
                        <div className="box product" key={index} >
                            <div className="img" >
                                <img src={value.cover} alt="" />
                            </div>
                            <h4>{value.name}</h4>
                            <span>{value.price}</span>
                        </div>
                        
                    )
                })}

            </Slider>
        
    )
}

export default DCard
