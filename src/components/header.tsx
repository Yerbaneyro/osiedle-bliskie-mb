import * as React from "react";
import styled from "styled-components";

import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";

import { Navigation } from "../../types";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const MenuBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 128px;
    width: 1300px;
`;

const NavigationWrapper = styled.nav`
    display: flex;

    ul {
        width: 440px;
        display: flex;
        font-size: 18px;
        list-style: none;
        justify-content: space-between;
        cursor: pointer;
    }
`;

const ContactButton = styled.button`
    width: 128px;
    height: 46px;
    margin-right: 32px;
    background-color: #739143;
    border-radius: 5px;
    font-weight: 500;
    font-size: 20px;
    color: white;
    border: none;
    cursor: pointer;
`;

const Header = ({ id }: Navigation) => {
    return (
        <HeaderContainer id={id}>
            <MenuBar>
                <StaticImage
                    src="../images/logo1.png"
                    alt="logo Osiedle Bliskie"
                    layout="fixed"
                />
                <NavigationWrapper>
                    <ul>
                        <li onClick={() => scrollTo("#start")}>Start</li>
                        <li onClick={() => scrollTo("#area")}>O osiedlu</li>
                        <li onClick={() => scrollTo("#localisation")}>
                            Lokalizacja
                        </li>
                        <li onClick={() => scrollTo("#about")}>O nas</li>
                    </ul>
                </NavigationWrapper>
                <ContactButton>Kontakt</ContactButton>
            </MenuBar>
        </HeaderContainer>
    );
};

export default Header;
