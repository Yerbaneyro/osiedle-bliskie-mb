import * as React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { StaticImage } from "gatsby-plugin-image";

import Header from "../components/header";
import SliderSection from "../components/slider";
import Icons from "../components/icons";

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
            </body>
        </>
    );
};

export default IndexPage;
