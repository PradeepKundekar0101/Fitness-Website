import React, { useRef, useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const Training = () => {
  
  const [noofSlides,setnoofSlides]=useState(3);
  useEffect(() => {
    if(window.screen.width>=998)
    {
      setnoofSlides(3);
    }else if(window.screen.width>768 && window.screen.width<998)
      setnoofSlides(2);
    else
    setnoofSlides(1);
  }, [window])
  
  return (
    <div className='training'>
            <h1 className='heading1'>CLASSES AND TRAINING EXERCISE</h1>
            <p className="para1">
            Our classes are cutting-edge workouts designed through proven exercise science. The classes feature high-intensity workouts, fun music, and energetic coaches.
            </p>
            <div className="swiper">

            
            <Swiper
            slidesPerView={noofSlides}
            spaceBetween={30}
            slidesPerGroup={noofSlides}
            loop={true} 
            // loopFillGroupWithBlank={true}
           
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
        <SwiperSlide>
        <div data-aos="slide-up" className="card"style={{width: "10rem;",height:"50rem"}}>
        <img className="card-img-top" src="foto3.jpg" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Personal Training</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in eleifend metus, eu lobortis quam. Quisque efficitur, nulla vel facilisis sagittis, sapien sem mollis dolor, at venenatis est tellus id odio.</p>
           
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="slide-up"  className="card" style={{borderRadius:"10px", width: "10rem;",height:"50rem"}}>
        <img className="card-img-top" src="foto2.jpg" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Studio Classes</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in eleifend metus, eu lobortis quam. Quisque efficitur, nulla vel facilisis sagittis, sapien sem mollis dolor, at venenatis est tellus id odio</p>
           
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div data-aos="slide-up" className="card"style={{width: "10rem;",height:"50rem"}}>
        <img className="card-img-top" src="foto.jpg" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="cardtitle">Free Weights</h5>
            <p className="cardtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in eleifend metus, eu lobortis quam. Quisque efficitur, nulla vel facilisis sagittis, sapien sem mollis dolor, at venenatis est tellus id odio</p>
           
        </div>
        </div>
        </SwiperSlide>
        
        
      </Swiper>

        <div className="trainingbottom">
            <h1 className="bottomheading">
            GET FULL ACCESS TO PERSONAL TRAINING AND FREE WEIGHTS.
            </h1>
            <button className="btn-primary">START TODAY</button>
            <p>Push your personal limits and build new skills.</p>
        </div>

      </div>
    </div>
  )
}

export default Training