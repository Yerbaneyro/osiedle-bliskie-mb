import * as React from "react";
import styled from "styled-components";

import { StaticImage } from "gatsby-plugin-image";

import scrollTo from "gatsby-plugin-smoothscroll";

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
    background-color: #2a4819;
    color: white;

    @media (max-width: 428px) {
        display: none;
    }
`;

const MenuBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 128px;
    width: 1300px;
`;

const Navigation = styled.nav`
    display: flex;

    ul {
        width: 440px;
        display: flex;
        font-weight: 700;
        font-size: 18px;
        list-style: none;
        justify-content: space-between;
        cursor: pointer;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <MenuBar>
                <StaticImage
                    src="../images/logofooter.png"
                    alt="logo Osiedle Bliskie Footer"
                    layout="fixed"
                />
                <Navigation>
                    <ul>
                        <li onClick={() => scrollTo("#start")}>Start</li>
                        <li onClick={() => scrollTo("#area")}>O osiedlu</li>
                        <li onClick={() => scrollTo("#localisation")}>
                            Lokalizacja
                        </li>
                        <li onClick={() => scrollTo("#about")}>O nas</li>
                    </ul>
                </Navigation>
            </MenuBar>
        </FooterContainer>
    );
};

export default Footer;
