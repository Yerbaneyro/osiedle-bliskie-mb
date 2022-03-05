import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

//styled-components
const AreaContainer = styled.div`
    width: 1274px;
    height: 640px;
    margin-top: 113px;
    margin-left: 50%;
    transform: translate(-50%);
`;

const ImageWraper = styled.div`
    width: 950px;
    border-radius: 15px;
    overflow: hidden;
`;

const TextContainer = styled.div`
    position: absolute;
    top: 68px;
    right: 0px;
    width: 560px;
    height: 500px;
    color: white;

    background: #739143;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 15px;

    h2 {
        position: absolute;
        top: 73px;
        left: 49px;

        font-weight: 700px;
        font-size: 43px;
    }

    p {
        position: absolute;
        top: 148px;
        left: 54px;
        margin-right: 41px;
        font-size: 18px;
        line-height: 21px;
    }
`;

const Area = () => {
    return (
        <AreaContainer>
            <ImageWraper>
                <StaticImage
                    src="../images/oosiedlu.jpg"
                    alt="O Osiedlu Wizualizacja 3D"
                    layout="fixed"
                />
            </ImageWraper>
            <TextContainer>
                <h2>O osiedlu</h2>
                <p>
                    Budynki wykonano w zgodzie z najnowocześniejszymi
                    technologiami i z wykorzystaniem ekologach materiałów.
                    Wyróżniają się trwałością, bardzo dobrą izolacją termiczną
                    oraz akustyczną. Położone zostały tradycyjne fundamenty,
                    wykonano stropy żelbetowe nad parterem oraz nad piętrem,
                    dach skośny pokryty został betonowa dachówką a ściany
                    zewnętrze i konstrukcje powstały z cegieł w innowacyjnej
                    technologii Porotherm Dryfix. W domach na parterze i na
                    piętrze znajduje się ogrzewanie podłogowe zasilane pompą
                    ciepła.
                </p>
            </TextContainer>
        </AreaContainer>
    );
};

export default Area;
