import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import GlobalStyle from "../globalStyles";
import Header from "../components/header";

// styles
const Slider = styled.div`
    width: 1236px;
    height: 553px;
    margin-left: 50%;
    transform: translate(-50%);
`;

const SliderHeader = styled.h2`
    position: relative;
    top: 107px;
`;
const SliderHeaderBold = styled.h2`
    font-size: 54px;
    font-weight: 700;
    margin-left: 6px;
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
`;

const CaptionContainer = styled.div`
    position: absolute;
    top: 294px;

    width: 1037px;
    height: 259px;
    border-radius: 20px;
    background-color: #9ac259;

    p {
        margin: 38px 30px;
        width: 520px;
        font-weight: bold;
        font-size: 32px;
        color: white;
    }
`;

// markup
const IndexPage = () => {
    return (
        <>
            <title>Osiedle Bliskie</title>
            <GlobalStyle />
            <body>
                <Header />
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
                    </CaptionContainer>
                </Slider>
            </body>
        </>
    );
};

export default IndexPage;
