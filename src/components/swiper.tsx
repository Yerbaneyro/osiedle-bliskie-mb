import React from "react";

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import styled from "styled-components";

const SwiperSlider = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allDatoCmsPreviousInvestment {
                nodes {
                    name
                    featuredImage {
                        gatsbyImageData(width: 600)
                    }
                }
            }
        }
    `);

    let imagesData = data.allDatoCmsPreviousInvestment.nodes;
    let images = getImage(data.allDatoCmsPreviousInvestment.nodes);

    console.log(imagesData);
    console.log(images);
    return (
        <Swiper modules={[Pagination]}>
            {imagesData.map((e: any) => {
                return (
                    <SwiperSlide>
                        <GatsbyImage
                            image={e.featuredImage.gatsbyImageData}
                            alt="Slider Image"
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SwiperSlider;
