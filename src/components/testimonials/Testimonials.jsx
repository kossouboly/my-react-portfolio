import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVTR1,
    name: 'konan cecile',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam voluptatibus autem iusto omnis quidem magnam nostrum a illo! Perspiciatis voluptates quas veritatis eum eaque doloremque laudantium culpa quae atque?',
  },
  {
    avatar: AVTR2,
    name: 'digbeu hermann',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam voluptatibus autem iusto omnis quidem magnam nostrum a illo! Perspiciatis voluptates quas veritatis eum eaque doloremque laudantium culpa quae atque?',
  },
  {
    avatar: AVTR3,
    name: 'seri ange',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam voluptatibus autem iusto omnis quidem magnam nostrum a illo! Perspiciatis voluptates quas veritatis eum eaque doloremque laudantium culpa quae atque?',
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam voluptatibus autem iusto omnis quidem magnam nostrum a illo! Perspiciatis voluptates quas veritatis eum eaque doloremque laudantium culpa quae atque?',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>

              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
