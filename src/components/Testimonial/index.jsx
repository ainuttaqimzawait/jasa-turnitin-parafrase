import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Image1 from '../Assets/Images/IMG_Testimonial_1.jpg'
import Image2 from '../Assets/Images/IMG_Testimonial_2.jpg'
import Image3 from '../Assets/Images/IMG_Testimonial_3.jpg'
import Image4 from '../Assets/Images/IMG_Testimonial_4.jpg'
import Image5 from '../Assets/Images/IMG_Testimonial_5.jpg'
import Image6 from '../Assets/Images/IMG_Testimonial_6.jpg'
import Image7 from '../Assets/Images/IMG_Testimonial_7.jpg'
import Image8 from '../Assets/Images/IMG_Testimonial_8.jpg'
import Image9 from '../Assets/Images/IMG_Testimonial_9.jpg'
import Image10 from '../Assets/Images/IMG_Testimonial_10.jpg'
import Image11 from '../Assets/Images/IMG_Testimonial_11.jpg'


const Testimonial = () => {

    const testimonials = [
        {
            img: Image1,
            alt: 'Jasa pembuatan makalah'
        },
        {
            img: Image2,
            alt: 'Jasa pembuatan Skripsi'
        },
        {
            img: Image3,
            alt: 'Jasa Cek turnitin'
        },
        {
            img: Image4,
            alt: 'Jasa Parafrase'
        },
        {
            img: Image5,
            alt: 'Jasa Editing makalah'
        },
        {
            img: Image6,
            alt: 'Jasa penurunan plagiasi'
        },
        {
            img: Image7,
            alt: 'Jasa pembuatan jurnal'
        },
        {
            img: Image8,
            alt: 'Jasa pembuatan tesis'
        },
        {
            img: Image9,
            alt: 'Jasa penurunan turnitin'
        },
        {
            img: Image10,
            alt: 'konsultasi turnitin'
        },
        {
            img: Image11,
            alt: 'Jasa pembuatan makalah'
        },

    ]
    return (
        <section id='testimonials' className='bg-blue-50 py-20'>
            <h1 className="text-4xl font-bold text-green mb-20">Testimonial</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper w-full md:w-1/2 py-14 px-3"
            >
                {testimonials.map((service, index) => (
                    <SwiperSlide key={index} className='!w-1/3'>
                        <img src={service.img} alt={service.alt} className='w-full' />
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}

export default Testimonial;