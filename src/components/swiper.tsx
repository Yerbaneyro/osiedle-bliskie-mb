import React from "react";

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import styled from "styled-components";

const ImageContainer = styled.div`
    position: relative;
    height: 508px;
    width: 646px;
    border-radius: 15px;
`;

const SwiperSlider = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allDatoCmsSlider {
                nodes {
                    gallery {
                        gatsbyImageData(width: 646, height: 508)
                        alt
                    }
                }
            }
        }
    `);

    let imagesData = data.allDatoCmsSlider.nodes[0].gallery;

    console.log(imagesData);
    return (
        <Swiper modules={[Pagination]}>
            {imagesData.map((e: any) => {
                return (
                    <SwiperSlide>
                        <ImageContainer>
                            <GatsbyImage
                                image={e.gatsbyImageData}
                                alt={e.alt}
                            />
                        </ImageContainer>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SwiperSlider;
