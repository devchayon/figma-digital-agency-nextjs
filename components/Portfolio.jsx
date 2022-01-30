/* eslint-disable @next/next/no-img-element */
import projects from './projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';

const PortfolioStyles = styled.div`
  .swiper-container {
    padding-top: 5rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: #5454d4;
    z-index: 10;
    right: 70px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: #fff;
    border-radius: 100%;
  }
  .swiper-button-next {
    right: 8px;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 1.5rem;
  }

  .bg-custom {
    background-color: #262629;
  }
`;

const Portfolio = () => {
  return (
    <PortfolioStyles>
      <div className="py-24 mb-16 mt-8 relative">
        <img
          className="absolute top-5 md:top-12 w-14 right-3 md:right-8"
          src="/assets/portshape/port-shape-1.png"
          alt=""
        />
        <img
          className="absolute bottom-14 w-10  left-3 md:left-5"
          src="/assets/portshape/port-shape-2.png"
          alt=""
        />
        <h2 className="text-center md:text-left mb-10 text-3xl md:text-5xl font-bold">
          Our Awesome Portfolio
        </h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          breakpoints={{
            // When window width is >= 648px
            648: {
              slidesPerView: 1,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // When window width is >= 1200px
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="swiper-container flex flex-col gap-0 ">
                <div className="flex flex-col overflow-hidden">
                  <img
                    className="w-full h-64 rounded-md object-cover"
                    src={project.img}
                    alt=""
                  />
                  <div className="px-2 mt-2 py-2 bg-custom rounded-md">
                    <h1>{project.name}</h1>
                    <p>{project.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </PortfolioStyles>
  );
};

export default Portfolio;
