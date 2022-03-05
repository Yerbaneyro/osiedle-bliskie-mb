import * as React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { StaticImage } from "gatsby-plugin-image";

import "mapbox-gl/dist/mapbox-gl.css";

import Header from "../components/header";
import SliderSection from "../components/slider";
import Icons from "../components/icons";
import Area from "../components/area";
import Localisation from "../components/localisation";

//styled-components

// markup
const IndexPage = () => {
    return (
        <>
            <title>Osiedle Bliskie</title>
            <GlobalStyle />
            <body>
                <Header />
                <SliderSection />
                <Icons />
                <Area />
                <Localisation />
            </body>
        </>
    );
};

export default IndexPage;
