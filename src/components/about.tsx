import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

//styled-components

const AboutContainer = styled.div`
    width: 1274px;
    height: 474px;
    margin-top: 149px;
    margin-left: 50%;
    transform: translate(-50%);
`;

const ImageWraper = styled.div`
    border-radius: 15px;
    overflow: hidden;
`;

const AboutText = styled.div`
    position: absolute;
    top: 135px;
    width: 874px;
    height: 339px;
    margin-left: 50%;
    transform: translate(-50%);
    background: #739143;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    color: white;
    text-align: center;

    h2 {
        font-weight: 700;
        font-size: 43px;
        margin-top: 31px;
    }

    p {
        margin: 25px 74px;
        font-size: 18px;
        line-height: 21px;
        white-space: pre-wrap;
    }
`;

const About = () => {
    return (
        <AboutContainer>
            <ImageWraper>
                <StaticImage
                    src="../images/aboutimage.png"
                    alt="About Background"
                />
            </ImageWraper>
            <AboutText>
                <h2>O Nas</h2>
                <p>
                    Budujemy nowoczesne osiedla mieszkaniowe w otoczeniu zieleni
                    o najwyższych standardach jakości i komfortu.
                </p>
                <p>
                    Głównym zadaniem, do którego została powołana spółka KDM
                    Nieruchomości, jest świadczenie szerokiego zakresu usług
                    zdeweloperskich.
                </p>

                <p>
                    Nasze inwestycje to wyjątkowe, pojedyncze realizacje o
                    niepowtarzalnym charakterze, realizowane dla indywidualnych
                    klientów – małych i średnich przedsiębiorstw.
                </p>
            </AboutText>
        </AboutContainer>
    );
};

export default About;
