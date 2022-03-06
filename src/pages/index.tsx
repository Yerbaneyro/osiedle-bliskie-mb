import * as React from "react";

import GlobalStyle from "../globalStyles";
import { graphql } from "gatsby";

import "mapbox-gl/dist/mapbox-gl.css";

import Header from "../components/header";
import SliderSection from "../components/slider";
import Icons from "../components/icons";
import Area from "../components/area";
import Localisation from "../components/localisation";
import About from "../components/about";
import Tiles from "../components/tiles";
import Footer from "../components/footer";

// markup
const IndexPage = ({ data }: any) => {
    return (
        <>
            <title>Osiedle Bliskie</title>
            <GlobalStyle />
            <body>
                <Header id="start" />
                <SliderSection data={data} />
                <Icons />
                <Area id="area" />
                <Localisation id="localisation" />
                <About id="about" />
                <Tiles data={data} />
                <Footer />
            </body>
        </>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsSlider {
            nodes {
                gallery {
                    gatsbyImageData(width: 646, height: 508)
                    alt
                }
            }
        }
        allDatoCmsPreviousInvestment {
            nodes {
                name
                featuredImage {
                    gatsbyImageData
                    alt
                }
            }
        }
    }
`;

export default IndexPage;
