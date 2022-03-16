/* import React from 'react'
// import Slider from "react-slick";
import TickerSlide from './TickerSlide';


const Tickerslider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        // autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1.25,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <>
            <Slider {...settings}>
                <TickerSlide/>
                <TickerSlide/>
                <TickerSlide/>
                <TickerSlide/>
                <TickerSlide/>
                <TickerSlide/> 
            </Slider>
        </>
    )
}

export default Tickerslider
 */