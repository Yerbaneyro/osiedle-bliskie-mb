import * as React from "react";

import styled from "styled-components";
import SwiperSlider from "../components/swiper";

import { Query } from "../../types";

// styles
const Slider = styled.div`
    width: 1236px;
    height: 553px;
    margin-left: 50%;
    transform: translate(-50%);

    @media (max-width: 1024px) {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 534px;
        height: 850px;
    }
    @media (max-width: 428px) {
        width: 428px;
        height: 700px;
    }
`;

const SliderHeader = styled.h2`
    position: relative;
    top: 107px;
    @media (max-width: 1024px) {
        position: inherit;
        top: 0;
    }
`;
const SliderHeaderBold = styled.h2`
    font-size: 54px;
    font-weight: 700 !important;
    margin-left: 6px;
    @media (max-width: 428px) {
        font-size: 34px;
        text-align: center;
        position: relative;
        right: 70px;
        top: 10px;
    }
`;
const SliderHeaderThin = styled.h2`
    font-size: 54px;
    font-weight: 400;
    margin-left: 53px;
    background-color: transparent;

    &:before {
        content: "";
        display: flex;
        position: relative;
        top: 50px;
        right: 7px;
        width: 485px;
        height: 13px;
        border-radius: 5px;
        background-color: #9ac259;
        z-index: -1;
    }
    @media (max-width: 428px) {
        font-size: 34px;
        text-align: center;
        position: relative;
        right: 20px;

        &:before {
            width: 310px;
            left: 0px;
            top: 36px;
        }
    }
`;

const CaptionContainer = styled.div`
    position: absolute;
    bottom: 0px;

    width: 1037px;
    height: 259px;
    border-radius: 20px;
    background-color: #9ac259;

    p {
        margin-top: 38px;
        margin-left: 30px;
        margin-right: 30px;
        margin-bottom: 19px;
        width: 520px;
        font-weight: bold;
        font-size: 32px;
        line-height: 38px;
        color: white;
    }
    button {
        width: 127px;
        height: 43px;
        border: none;
        margin-left: 30px;
        font-size: 20px;
        font-weight: 600;
        color: white;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        background-color: #739143;
        cursor: pointer;
    }
    @media (max-width: 1024px) {
        position: inherit;
        top: 0;
        background-color: #ffffff;

        p {
            margin-left: 50%;
            transform: translate(-50%);
            text-align: center;
            color: black;
        }

        button {
            margin-left: 50%;
            transform: translate(-50%);
        }
    }
    @media (max-width: 428px) {
        p {
            font-size: 20px;
            width: 340px;
        }
    }
`;

const SliderWraper = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;

    width: 645px;

    text-align: center;
    font-size: 40px;

    @media (max-width: 1024px) {
        position: relative;
    }
    @media (max-width: 428px) {
        width: 370px;
    }
`;

const SliderSection = ({ data }: Query) => {
    return (
        <Slider>
            <SliderHeader>
                <SliderHeaderBold>Zamieszkaj</SliderHeaderBold>
                <SliderHeaderThin>na Osiedlu Bliskie</SliderHeaderThin>
            </SliderHeader>
            <CaptionContainer>
                <p>
                    Wybierz wygodny dom łączący ekologiczne rozwiązania
                    <br />i energooszczędne technologie!
                </p>
                <button>Sprawdź</button>
            </CaptionContainer>
            <SliderWraper>
                <SwiperSlider data={data} />
            </SliderWraper>
        </Slider>
    );
};

export default SliderSection;
