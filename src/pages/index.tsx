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

//styled-components
const TilesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1274px;
    height: 424px;
    margin-top: 178px;
    margin-left: 50%;
    transform: translate(-50%);

    h3 {
        position: absolute;
        text-align: center;
        width: 300px;
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
        color: white;
    }
`;

const TileWraper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 399px;
    height: 399px;
    border-radius: 15px;
    background-color: #739143;
    overflow: hidden;

    div {
        width: 399px;
        height: 399px;
        opacity: 0.5;
    }
`;
// markup
const IndexPage = ({ data }: any) => {
    let tilesData = data.allDatoCmsPreviousInvestment.nodes;

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
                <TilesContainer>
                    {tilesData.map((e: any) => {
                        return (
                            <TileWraper>
                                <div>
                                    <GatsbyImage
                                        image={e.featuredImage.gatsbyImageData}
                                        alt={e.featuredImage.alt}
                                        objectFit={"cover"}
                                    />
                                </div>
                                <h3>{e.name}</h3>
                            </TileWraper>
                        );
                    })}
                </TilesContainer>
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
