import * as React from "react";
import styled from "styled-components";

import { GatsbyImage, Layout } from "gatsby-plugin-image";
import { Query } from "../../types";

//styled-components
const TilesContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const TilesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 1274px;
    min-height: 424px;
    margin-top: 178px;

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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
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
    @media (max-width: 428px) {
        width: 340px;
        height: 340px;
    }
`;

const Tiles = ({ data }: Query) => {
    let tilesData = data.allDatoCmsPreviousInvestment.nodes;
    return (
        <TilesContainer>
            <TilesWrapper>
                {tilesData.map(
                    (e: {
                        name: string;
                        featuredImage: {
                            alt: string;
                            gatsbyImageData: {
                                layout: Layout;
                                width: number;
                                height: number;
                                images: object;
                            };
                        };
                    }) => {
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
                    }
                )}
            </TilesWrapper>
        </TilesContainer>
    );
};

export default Tiles;
