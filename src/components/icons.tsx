import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

//styled-components
const IconsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 114px;
    max-width: 780px;
    margin-left: 50%;
    transform: translate(-50%);

    div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 10px;
        width: 180px;

        p {
            text-align: center;
            margin-top: 30px;
            font-weight: 700;
            font-size: 24px;
            color: #2a4819;
            white-space: pre-wrap;
        }
    }
`;

const Icons = () => {
    return (
        <IconsContainer>
            <div>
                <StaticImage
                    src="../images/warstwa2.png"
                    alt="Znakomita Lokalizacja Image"
                    layout="fixed"
                />
                <p>Znakomita Lokalizacja</p>
            </div>
            <div>
                <StaticImage
                    src="../images/warstwa4.png"
                    alt="Znakomita Lokalizacja Image"
                    layout="fixed"
                />
                <p>Wygodna Przestrzeń</p>
            </div>
            <div>
                <StaticImage
                    src="../images/warstwa3.png"
                    alt="Znakomita Lokalizacja Image"
                    layout="fixed"
                />
                <p>{`Wygoda \n i oszczędność`}</p>
            </div>
        </IconsContainer>
    );
};

export default Icons;
