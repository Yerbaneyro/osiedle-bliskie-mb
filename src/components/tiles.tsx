import * as React from "react";
import styled from "styled-components";

import { GatsbyImage } from "gatsby-plugin-image";
import { Query } from "./slider";

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

const Tiles = ({ data }: Query) => {
    let tilesData = data.allDatoCmsPreviousInvestment.nodes;
    return (
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
    );
};

export default Tiles;
