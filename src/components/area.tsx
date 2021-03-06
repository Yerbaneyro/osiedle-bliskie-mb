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

    @media (max-width: 1024px) {
        max-width: 534px;
    }

    @media (max-width: 428px) {
        width: 428px;
        height: 800px;
        margin-top: 30px;
    }
`;

const ImageWraper = styled.div`
    width: 950px;
    border-radius: 15px;
    overflow: hidden;

    @media (max-width: 1024px) {
        position: absolute;
        width: 560px;
        bottom: 0px;
        margin-left: 50%;
        transform: translate(-50%);
    }
    @media (max-width: 428px) {
        width: 350px;
        bottom: 50px;
    }
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
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

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
    @media (max-width: 1024px) {
        position: inherit;
        margin-left: 50%;
        transform: translate(-50%);
        text-align: center;
        height: 320px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        h2 {
            position: inherit;
            padding-top: 20px;
        }

        p {
            position: inherit;
            margin: 30px 20px;
        }
    }
    @media (max-width: 428px) {
        width: 350px;
        height: 500px;
    }
`;

const Area = ({ id }: any) => {
    return (
        <AreaContainer id={id}>
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
                    Budynki wykonano w zgodzie z najnowocze??niejszymi
                    technologiami i z wykorzystaniem ekologach materia????w.
                    Wyr????niaj?? si?? trwa??o??ci??, bardzo dobr?? izolacj?? termiczn??
                    oraz akustyczn??. Po??o??one zosta??y tradycyjne fundamenty,
                    wykonano stropy ??elbetowe nad parterem oraz nad pi??trem,
                    dach sko??ny pokryty zosta?? betonowa dach??wk?? a ??ciany
                    zewn??trze i konstrukcje powsta??y z cegie?? w innowacyjnej
                    technologii Porotherm Dryfix. W domach na parterze i na
                    pi??trze znajduje si?? ogrzewanie pod??ogowe zasilane pomp??
                    ciep??a.
                </p>
            </TextContainer>
        </AreaContainer>
    );
};

export default Area;
