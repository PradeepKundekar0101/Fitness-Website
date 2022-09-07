import {useState,useEffect,React} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
const Schedule = () => {
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
   <div className='schedule'>
        <div className='parallex'>  
            <h3>CLASS SCHEDULE.
            TRAIN WITH US.</h3>
            <button className='btn-primary'>Purchase</button>
        </div>
        <div data-aos="slide-right" className='timings'>
            <table>
                <tr>
                    <th></th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thur</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
                <tr>
                    <th>7:30</th>
                    <td>Morning Walk</td>
                    <td>Cardio</td>
                    <td>Yoga</td>
                    <td>Strength</td>
                    <td>Yoga</td>
                    <td>Yoga</td>
                </tr>
                <tr>
                    <th>10:00</th>
                    <td>Morning Walk</td>
                    <td>Cardio</td>
                    <td>Yoga</td>
                    <td>Strength</td>
                    <td>Yoga</td>
                    <td>Yoga</td>
                </tr>
                <tr>
                    <th>11:15</th>
                    <td>Morning Walk</td>
                    <td>Cardio</td>
                    <td>Yoga</td>
                    <td>Strength</td>
                    <td>Yoga</td>
                    <td>Yoga</td>
                </tr>
                <tr>
                    <th>18:30</th>
                    <td>Morning Walk</td>
                    <td>Cardio</td>
                    <td>Yoga</td>
                    <td>Strength</td>
                    <td>Yoga</td>
                    <td>Yoga</td>
                </tr>
                <tr>
                    <th>7:30am</th>
                    <td>Morning Walk</td>
                    <td>Cardio</td>
                    <td>Yoga</td>
                    <td>Strength</td>
                    <td>Yoga</td>
                    <td>Yoga</td>
                </tr>
            </table>
            <div className='personaltrainers'>
            <h1 className='heading1'>PERSONAL TRAINERS</h1>
            <p className='para1'>A personal trainer will be able to teach and guide you on how to perform exercises correctly and safely.</p>
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
        <div className="card"style={{width: "10rem;",height:"50rem"}}>
        <img className="card-img-top" src="person1.jpg" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Phillip Hunt</h5>
            <h3 className='cardsubtitle'>Personal Trainer</h3>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in eleifend metus, eu lobortis quam.</p>
           
        </div>
        <div className='social'>
                <div className='left'>
                    <ul>
                        <li><i class="fa-brands fa-facebook-f"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li ><i class="fa-brands fa-instagram"></i></li>
                    
                        <li><i class="fa-solid fa-phone"></i></li>
                </ul>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card"style={{borderRadius:"10px", width: "10rem;",height:"50rem"}}>
        <img className="card-img-top" src="person2.jpg" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Monica Turner</h5>
            <h3 className='cardsubtitle'>Personal Trainer</h3>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in eleifend metus, eu lobortis quam. </p>
            
        </div>
        <div className='social'>
                <div className='left'>
                    <ul>
                        <li><i class="fa-brands fa-facebook-f"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li ><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-solid fa-phone"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card"style={{width: "10rem;",height:"50rem"}}>
        <img className="card-img-top" src="person3.jpg" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Luke Jacobs</h5>
            <h3 className='cardsubtitle'>Personal Trainer</h3>
            <p className="cardtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in eleifend metus, eu lobortis quam. </p>     
        </div>
        <div className='social'>     
                    <ul>
                        <li><i class="fa-brands fa-facebook-f"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li ><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-solid fa-phone"></i></li>
                    </ul> 
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
      
        </div>
        
        </div>
        
   </div>
  )
}

export default Schedule