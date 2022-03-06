import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";
import { slide as Menu } from "react-burger-menu";

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
    @media (max-width: 840px) {
        display: none;
    }
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
    @media (max-width: 840px) {
        ul {
            width: 440px;
            display: block;
            font-weight: 700;
            font-size: 28px;
            list-style: none;
            justify-content: space-between;
            cursor: pointer;

            li {
                margin-top: 20px;
            }
        }
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

const MobileHeader = styled.div`
    display: none;
    @media (max-width: 840px) {
        display: flex;
        margin: 50px;
    }
`;

const styles = {
    bmBurgerButton: {
        position: "fixed",
        width: "36px",
        height: "30px",
        left: "36px",
        top: "36px",
    },
    bmBurgerBars: {
        background: "#244d11",
    },
    bmBurgerBarsHover: {
        background: "#a90000",
    },
    bmCrossButton: {
        height: "24px",
        width: "24px",
    },
    bmCross: {
        background: "#000000da",
    },
    bmMenuWrap: {
        position: "fixed",
        top: "0",
        right: "0",
        height: "100%",
    },
    bmMenu: {
        background: "#244d11ea",
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
    },
    bmMorphShape: {
        fill: "#373a47",
    },
    bmItemList: {
        color: "#ffffff",
        padding: "0.8em",
    },
    bmItem: {
        display: "inline-block",
    },
    bmOverlay: {
        background: "rgba(0, 0, 0, 0)",
    },
};

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
            <MobileHeader>
                <StaticImage
                    src="../images/logo1.png"
                    alt="logo Osiedle Bliskie"
                    layout="fixed"
                />

                <Menu right styles={styles}>
                    <NavigationWrapper>
                        <ul>
                            <li onClick={() => scrollTo("#start")}>Start</li>
                            <li onClick={() => scrollTo("#area")}>O osiedlu</li>
                            <li
                                onClick={() => {
                                    scrollTo("#localisation");
                                }}
                            >
                                Lokalizacja
                            </li>
                            <li onClick={() => scrollTo("#about")}>O nas</li>
                        </ul>
                    </NavigationWrapper>
                </Menu>
            </MobileHeader>
        </HeaderContainer>
    );
};

export default Header;
