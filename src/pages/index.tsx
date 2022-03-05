import * as React from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import "mapbox-gl/dist/mapbox-gl.css";

import Header from "../components/header";
import { SliderSection } from "../components/slider";
import Icons from "../components/icons";
import Area from "../components/area";
import Localisation from "../components/localisation";
import About from "../components/about";
import Tiles from "../components/tiles";

//styled-components

// markup
const IndexPage = ({ data }: any) => {
    return (
        <>
            <title>Osiedle Bliskie</title>
            <GlobalStyle />
            <body>
                <Header />
                <SliderSection data={data} />
                <Icons />
                <Area />
                <Localisation />
                <About />
                <Tiles data={data} />
            </body>
        </>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsSlider {
            nodes {
                gallery {
                    gatsbyImageData(width: 1000, height: 1000)
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
