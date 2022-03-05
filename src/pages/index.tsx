import * as React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";

import Header from "../components/header";
import SliderSection from "../components/slider";

// markup
const IndexPage = () => {
    return (
        <>
            <title>Osiedle Bliskie</title>
            <GlobalStyle />
            <body>
                <Header />
                <SliderSection />
            </body>
        </>
    );
};

export default IndexPage;
