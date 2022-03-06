import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import styled from "styled-components";
import { Query } from "../../types";

const SwiperSlider = ({ data }: Query) => {
    let imagesData = data.allDatoCmsSlider.nodes[0].gallery;

    console.log(imagesData);
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 7000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
        >
            {imagesData.map((e: any) => {
                return (
                    <SwiperSlide>
                        <GatsbyImage
                            image={e.gatsbyImageData}
                            alt={e.alt}
                            style={{ borderRadius: 15 }}
                            objectFit={"cover"}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SwiperSlider;
